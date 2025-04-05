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
    "3JjSgXbdi3UHM8CXuhbXB7oujfUyQYmtpRvP29B4hswU67xtBn8oZvMpLnmtD6oHKnsEdBkpR7ck2Qeq8Tf3ZsWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27HtEugNeHmhb52UMAQhYt4RqDJZRiDVen2qPmQ9wKST9U2sS6BLrLkXDjbN5FQLRs2VAnQLvGmKwFEf4CjyDke8",
  "key1": "3V5rYjShP4NhVQb6Tr9ffbEf24NeDBUonQrPKHieG8Q7xWLc1bUxqMbDVvWRGw6UJYE9khVtaCbk4AzahA3ZDjNT",
  "key2": "3BwjdN9p74z84UgCKWDc3X6EosmLgeLWXCMPBa7mAWGCbSH2LvFpp5W8RcBqHBeYMU65gN6uBJW2VSjrYvbHdbVg",
  "key3": "3DA6TKYECNsfnquPNcGdagHyXZnmhewwU3H1GM5kkkw1V1RkeR9GnodxjE6Q3k1R3dtuNgBgVqXBbtu2ZR4ARCn8",
  "key4": "58LyojBgrY2eC2RGPLwscbd2h8oopd62WEctcmkf4HHBiXjCDpdecQVWLMNeHmBtx4tYMM3oYjCQDEK1TzXKeRxw",
  "key5": "BLC5tdZeAvNCixtndApjwpQ2WhwPRxVhgbALrt2dZ27C9PT9QwtsxCC2bJtG5TUARtCNedUTWJanxjqT7ahdWPQ",
  "key6": "3PcM6Nud2jcDeNDcsDzxGXXcW7hCfdi8Fasv8GR1JG5zf3ZAnMSgyAcSZ8W5rL7pxoxhcg5WpycuPWsynJ8cYTeP",
  "key7": "55pdiWBALu6fauX2ZDnmNKc2zumS1GFAQMXWom8CGpFUqPAqd72L1X7eN17oWoQkuhxvC4mMJuvyx6BEaeXmpmQn",
  "key8": "tP5QaTQMV37wGGnu48133cG7VV4cpEwXyz8iCANZQYBiHZkuJRaKeUrKCh89SZ66tVnx66bsfZ1RJ5XFZwTiTKB",
  "key9": "2StjnUBvwSu2ckroqa8QuKnJuuAtnpwsZmytvLoLCWe6sGsUpwbrcowm4ub8posdWRCEnVPgxeHTnk8pj6TVB4tD",
  "key10": "5U63531bWHRfhxYQHKSbTWyJvZy9fdnL12P2pa5GvyTWzt3Ri7AgWMeJTz1LkUhc2RKDpmCC1jFf7QKtcXhX8R7v",
  "key11": "3VEHvnegSwtaaXFUQJLwqsv43KMth4LRqWTFSnqZDt6AGskcssrWRZFR9Un3igrRcqTerduNRUS3MqXXT7FQSdac",
  "key12": "22vwdm4eJKoAC8ryBiJcvjZNS9Pipy5HrhEKqdL22PWDtiifZkwyJevQphGsaJsBwKm5CBKkGxi1NmxAP5j82b91",
  "key13": "2MimDTDNBTdrudLa1fy5kuAF8Yq178SRxRQQyC3LxAvZ8yLuv1ZbpwVY7JWZCqoQbWUCqBQ5BwCNvQVnByageUWc",
  "key14": "5hFjJ2x92jYbXMN3shcqzdPwhsMWFFL1r5N1HXgKCGB3eJcSLZtyYRtcdBeTe9AA2c73hG5TiuHqGgPPdq74fEHk",
  "key15": "KxN176hC17THUzNH4B14TjVHfes3SN9sUdAhgnWrWDx8v5eAp9xA1xyHGkShHWMRX64SqrFfw63ueSE7EgWZZe2",
  "key16": "3Pv2VCRXs5ep7X9veWjnd8ygNYEqnpagdo9v8eayjhqkAcw7tDsxs8sz65B77npiAmHNT8tZ825tE8b2AWw2NYBm",
  "key17": "5KFjSTtbF9ooQEjYxWj11n1A4fFT1EotNgL8LE9VTDqgNaPk2CULjtQwXV5t9va9PusMh2BNzuq3q74VEjTE2SrZ",
  "key18": "2icQRRQKuR162kv7dnQSF7jphtDKvTFfgs7aKCw9fs26pZ5XvVWV3haaTWHox7o5SjASbPpz4cdN7djyan4oRonC",
  "key19": "2uka4zrXsV5x8zJQiMqBekdtT1rPSrEemgZGfZpBB6XynpvE3GXFszsjai8NeYpDQ18rwQPKbh3MDmT9uAzVVQ79",
  "key20": "5FKuv7KhvFu2oVjy11VXqzBoH5EToiLm9mS5AWT5UGmfTuCSifKrjCMis2m1jTT9PqAqQZJ1JkpFH4Eg7E6Ap7GY",
  "key21": "4k7iej9bwQmhZbG7YD6yUKT2UVz8W7vFpAmcj8LV6vxJe7cUrHmvpPWJQU5iQoD3rEJtF96LVaZKNTMZDqq3HJKy",
  "key22": "4PpRz4NTVhxRCVqtvfeByrasACNkPYwDw7L4tE9QcBVt9L1zF7WJC616u9YSVAR2LQdynRKu68SxUpwXoBWBdejT",
  "key23": "6K783U6G95K1puFoFmGDHcfNYNuC2dXLYHP7urpZcyTvcJnuxtCEDzp9QwarEtPs6HXKPshYcsbyH1VJsRvtxNT",
  "key24": "ttGh2EbwYuTnZWg5J7WCfQ75xyBaAyA3wjQQktfApM5exWkVDTZxJZeAfcSXuoTnmAq5CZZZ1LAd3XpZZtcp22d",
  "key25": "55dkMnLWJ5JyCZTyoACdywUMMdaiiBXiVG9BdLT6ScvYkXZd7zTsyYS2uR2gbg3Net5sgFRNgHxjR3qis9ECpCUG"
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
