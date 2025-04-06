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
    "3SrhFMpdBsnFyhanbMcv1yAbuzuNyjkURD8V5SSp5fz4jYLxffQTKm85H5gR75a2ehY76vDRieCrimgR3iPLeiDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MQ3dkHXuUNQytzGpaLWsbRyk3WuvCZD4hs1FSQ7e3cU9PGSwmroqFkKhWqh9eWZfE7zCueFyPWHE5PUSNcdvagJ",
  "key1": "4rwD31d9KzbymoZNgainGnmWHW9Q6a8iGUF7cPfctgEYpN9TQyq8JWqD4HoUfKpT6uYpw9k43McAdhwuiaSBoA1e",
  "key2": "5rHxeq8dwgNEKUeD8F7zry9KKVEUwS8npzuJ1WW2goV3NUrmoZ4KRjwNGDJ5K6MAnNmWrYrLzq9oyazJ9jqNbigS",
  "key3": "3yaa5tHKArqZEReyAhWQxAYbyqb73EdEKLccCDSavzvU4DzGY22c6s4p9ipyiPusSR5K2ZsUzqGY1SZ2PVZsy297",
  "key4": "3ynfrZiPBrpnUnbGiKVymUT2deGFKtcickFpfa2F8CaQs62naJHmXNBRUh3qDQkzcj67ZT1RrBxwQPsavYJTvJUZ",
  "key5": "2uLpLUwVvNdf3SjSMgLS4GjpZpXkmdvG4rGceQ3k3yCPuKAKuGK4yh2s1yocR7esU4mXzwY5PAMVPu8fTLZCE8io",
  "key6": "1DkwaTW7zs7MuDUvHJ3REc9VKA9mJuNVtBMs273MY8bK9MBSVaeCDvCcftFoueGoqec7a7JpfDzwikpuyiMtow2",
  "key7": "4UsJSqpe6GnksJoqSQUVRXa4PtqwSjzMnLSPZPqpwmMEsuGCgdgxVVQiLAfuDZrwk7Mktc1FpmRJWDfxAXEXsEci",
  "key8": "38aRjXx3fsMGnGDKjhJ9edAPhnRe3bt5kydh1hBqf3A97CPxSRN5TgsjD55w1hJyrJ4guf5Ngt4LVneTH1xgWxc",
  "key9": "4w4fyyXnzSc2YYLuXFCA7PDumPjxEeKteC2jKdzsN4hN2jCYnPzVCAKHnVnKxknLky8FsirQNC5z6vux7AyQiMET",
  "key10": "55ccKjCZtCMcWmip4oZFXXkJC65X8AAf3SStr652wQnW5v7CfPKCUR1URZjvfFnLr1U1ruAUCvZJDHoanUZCTyTu",
  "key11": "42zhwrtv2DAgV42XdA1m1osWmKDZCHbdfoUzoPboqrsqJiFGjkDoqCb7J6WX6hBiXYnUQxAnRhAvBTjG7kBYb6vE",
  "key12": "2f79JZmvsN15KYbTVjUUYPvASfmfR5MFdeT2YFQeJFxqq5dBfhBkvk91PJUNBQi2ctifauo2QvQXW6BpyM9EtqND",
  "key13": "5u5sEo8UNzwazrn2WWeVgUUch8yGweDQiHvuxQ2aJD6hrQsh3PspyoF6vFyhak51UAzStG3MZxNvy29BKSLBVTpz",
  "key14": "3DUpvif9WbQg3dyBBg23Wt6SptYvvGTrXxjwYhMDzUr6mXSFZf3SDdAo5yDEJ4WjgrYssTPnpS4pNasXvrMwoLcF",
  "key15": "2FiQ9Q1UDSeZunwHc2vnGK5XqLMaTAA5NhypmaVXPNpeY5muCZGzsmPivPqkbFUz4FN3rPbxfxJCvc9QnyBKCoFf",
  "key16": "BZBhJXvCitXetgwNzxQ3CmHutJKawcrBnUMtv2KBVYaFY8CieKKGrpoKrQsLtrK49E4m9VjNXNPkzbURmZ3rm9T",
  "key17": "5viUjkcWXQfxD23jiMBXAiRkBG9PiLNRi3KbxxVEjAMf7w1bXc1Zr77C1WGiE6m9rRm4iJZ2BSTPfLhttr1PYjep",
  "key18": "6HDgUacVeqUdP361JdxQDPS1nVoWV8ShhfYDNhNSH5riNS3rmYYA75ZenCQZApwf1zztqNWyQ2SNBrbwnUaFmrt",
  "key19": "5QQBocHoE5Q4vTVwf7onghmLm7MHaS3CcjCf8JxoXDVRzmoHJzKy511psMJRtTPyAHnWvoSehZb81BLBfSb2GUYm",
  "key20": "3wVzbPEuTmdGs6jcr4B6czyKKj5Cf7pKcqaqomRagy8v7weM6Unti5rVuqaCxM1kCAttXy4Hm32V3tYs82TzgxjY",
  "key21": "3nmwdYWm8W1UVbXajQLTxmidJLrEFjwzYF22ftAj7g5JpgTJ9JkBWhQtyz7qgtaJ9bGCYHXaaVNbT5428cggXZ7y",
  "key22": "2jjD7QWjGyJRiSk4oXhnd7GBiWsv1Z6vW5BtGuUMHg5QqiKBtPiWQbKJcHLNiAPFRnmDyzL4Pi6fptNmzC2FoNYo",
  "key23": "4AzqK5dCZLGHxq46g5LD3inQqxVPConrotsjnwxaCSZRxgTKLMFE1Ddhfo1fPqmkEr32DnJnLmFxyCHQJwKNuduC",
  "key24": "4yXxf3Li5FAbonRRUi7EgnxeY8qQVeM6BbbiZ4WLDYXYrgX144cLLfBEYyuFb41arxXaWz61stRXA9gEzUf5VM11",
  "key25": "3Z8vvWxoAHM3on7Du7VyJ1vwRo5JvWjowWKTmYzQB8f3xgPqdNyQanqzrBKzXMWx5pUs9moqG2RkSRp3iAb5mKNy",
  "key26": "5tXMyWvDJeDusceBrRaw1Ncst8k67sCJgr9ZJAtqbeUuCicgGU6TJYyKBpXinxdUz5UnpfTJHmodMgJQRLDrW5b8",
  "key27": "2BJh2wMFCiobtQvNrbzhSQe2phjMw2JvxDBWpmHWqGdgD6Mwvi2YQ3BidjxQppJ9wGCpnVfQZpBJB3V1BuaESotH",
  "key28": "wEFW1LUkGqtjGbcn15iVQciu15SAhkgjG62dXJDCsukAdegPaPS6sKu4kWyjfgwumTqTgAeRvJyv2bU5jxgiWRo"
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
