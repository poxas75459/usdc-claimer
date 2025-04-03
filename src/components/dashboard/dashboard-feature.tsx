/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "TeKwW7i3LNnGYzAYHhewMkG6PkSGufCJecXfRRKdQLVzXmNFJRaiGfhPyfoNqNRu3LTf4chKU9MRJU1NALK4JUP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51ahD48UdQ2DhFfwsFbJ713vi8YteM3iqwPyMYagcpMxW45Mv8PAa83zBNsgsXGJQNe7EKjBYeehtd2GT98zBtsj",
  "key1": "5ZPgqhVy9NFAwv3BDf1H3TjXZ5bSNGU3AVipAZcpNTK5zXp2FcrKKTXdCGKaU1pk3N3MrfT2fvfPga5hcZZsptWi",
  "key2": "RBELb6n8geEr95PLeNKt1frYAj1MEh3bUbKJarpXi2r8JnapBLzmePTXQSqVUSdkp7Htr5jfkVzesUNcPunH9uo",
  "key3": "5n6adugqVGQkVMgtAVQyuJ9csb3eCbPZXtWYKxC8YWFcehdtryQvwNSBsAhWuEq7eKhW8M1em3wjYQGBLezcdXju",
  "key4": "5xDPfNXNxUhmrj5RWN8MWg6k15vaqzUhCXpbiSuCJXaaR9inurMHpXnT92TLFFWjSNEvZ9v6vurZSvNomtHMGWxj",
  "key5": "3XFTCEUrmn5srRRV66c6oNvBs7q4HLCrMTXKTFEvntPANQVWG2savzXUs1F64Btc8xh2vwKHQKCDUpD72Tobj9o9",
  "key6": "4o68GWuvniY9nyv8mDrJBUPmZfrUg7tofwzs46LBySrAXHdWx8nsDBo7XqqRiCya4YrjNuh7AX8KsoXcj7q8uiG1",
  "key7": "2wcHGLQasjvMvUW5QdUuwSAD3yqBaocuasPa4k7W3RNrVzANxb2Eqyu3hm5F9GnPZSj7E9sT3SDycNnpJVwbC9hi",
  "key8": "58Pz1X3y8YTegNGDaT6yLD3nAaeNgPhD7xU8t2epdQMt8y4N3xiKtj5sTEf6VyYs2AWYuFQeXNhYw4KmX2XNypiP",
  "key9": "3ftak8whv7Lqt67bYcx4x77rfF2PVW94pwqscjFmbku74NWnquJoQg3Fzc3rJLRqVcZwAr89ka3xQ4wN1VzAkbGs",
  "key10": "49EQQUjDqPZrA4ZgT1aLSVdQ319NvGieAyiYZcHwRQiwWetpXEfG57NaaC5poQPwZpa3d58jVuoVBiFfjb7om6Xa",
  "key11": "2LuZrWqn7HAFSW7z88bYwgTwp6YRLjP2jhBg1bE43f43YYJT6ykmpktosf81riV5YTS8yvpBipMeejCkmT9wXL5n",
  "key12": "4DV4VMoVC6TxCt4UFA5pkr7jtH6iAt3UcFvgkNt17SobWPByjUxrv883yX7tG6rJQxd6n8CaaKhiSxVkg2cRbUJV",
  "key13": "3RT14FPnvxddsK7uf4KqjosAtEbqrvAz6y2M4T8qUyHoT1MN4Gt1WUjdktWMUGSf22LPoeCG8yitvhbVJrE5ThEt",
  "key14": "2MfYTVibXeWW1KbdB21uUQ2HpqM3EZxLoS3WqQGay5pBt2shc2WDwdgCGowQrsvg6aFZR32QaK9yaiboUiT2ZFuP",
  "key15": "4pRRGdBwAeCCbBfKYsTDJ1Un1xqR1N18SWMw9eWTu4hD26rNKy8prUB7Thfh6FdkALEE5FDCwPx5eX8xneaDeumK",
  "key16": "5QUoNCr3JMCAhudjJG74BDuFv8T3w9Mu5uyATpAnwdcgjdQXf4mpM8RskmB6Ym1ZhznHMrKHRe6SEW9pebQ1G43D",
  "key17": "5ASMtntB8YJjd3Ue89i4tz9L5sRgJRc1oYivUjoiEqoCfFGfoBekpRYrUEeCMQ5jftKTxMPjneHqHpSrDgEF9cXK",
  "key18": "41mwvM4UnbgsQyPCVbhHefJSoMd2sAZWXKGFE2WzfqosKTCf4d8zD62iXXChxZYSa8FCTeFBY9XJoRjc52SGdLnH",
  "key19": "D8Yc5QpyhcxCVq4qszWp735s8gE93LqqextU8aYp2oQGbMiAkKUW2BaS1F3mNFvp9YvSVeM4s4VSCVmUtqQYWPJ",
  "key20": "5coyxHYK6GFzJ8239vAdALKzcLxoVRFcqvYE6AAyH6qjKuM6wrCPMYcskbuaGGVQbHCuUsmhEJ4DpDYScpugTZbK",
  "key21": "4H8tgGNQvtaupUsQsQ8vV5UbfXCDBWE5vQkJBCNd5ZX9yXSrYCV5oHSdAeJ8Fu2vAcZX6SB8yAWELSv8W4ZUyqAt",
  "key22": "2AfQLo43uxABtaw3nKb5fuaj8M2DhpGFTM1sqempLBzyE5y5M3EVsPNy875yHmma8A7vwUW45UTcK49otgwGkHGN",
  "key23": "TqfQdrctairzqQCjZrNG1taLKJKxjnkLymtg58LFRSxBFKydT9Qev9UWgtnxoZXjaVbCaMECoD7JQ1gqcFC19Vj",
  "key24": "mF55vxa4FKV4bBKeXsS2kWtufeyh5ESzatpKJXVxCJZf4PW8R2LSaqPNZo2r5VmYyepg6D3ueCsWdYviqvZeSdD"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
