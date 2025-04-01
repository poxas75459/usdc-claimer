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
    "5MNRdpuCuCyYdzYFek2KnGsEXaryxFr6ZRKg8DHj1Pwt5P6pzcYAsNo75aEEihMX1YEkpZsj1vo9LGHYiBeU2j8R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JNkETDeECWkLM1HfjR34yhwXmBH7rzWZfQ1iphamH1Ts5Sj5RwvFAZiW3VNojER6n39kYWEzewBKxJurfCUMmUG",
  "key1": "iwJFYsp9Q6LDTqmeoA1HFBEBd7DjL8vbEjuosdtXSPns4YmPgNadFtJbBayLgEKCAteUrMx2Cr8RU8Kh2uXpGCG",
  "key2": "3e83zE6gqP7UxnDkGdLv4EUm5xpYLjs2VAdeLhpy4UUvdD75Uvs2u3HRwKbYMkQZ1xkvvCJBWQXNxModMQajL7zm",
  "key3": "5iXB1Qg6CPqd9YnkYSKY8qt7Hgo9ANiSamHfD2nawmLxJgbY8e5kA8Y4BFx7jMf5dcpWBNZuWAJ3QHpiJea91vHc",
  "key4": "2bG1bTLxtfGQ1JmcUkj8eaJwgxqwSeeJrR9xQbznDM5kVpqfJsMzMfNTi9eZjHYJBEosdfbZrPX2vrtRx52qD3H3",
  "key5": "2BGsbsgxwrS4ihVgQyY7TRa1g86LXjRXkoaK3szwkbv3xtCS3D24auJH5YbU8TBhDVEau33Bf74G4SA6MCzrEPZP",
  "key6": "5prjnQ1koJxpwPtVpnjku8UB95dwZBw2jb3FE4ZtUiLXH8oroKW1MyCpNB9qMLc9u5fokB5TF9QHAJ2Sk9FszrqF",
  "key7": "2cViMqH33JGvNETvxvuyBWX4uHL7yaooCeJquk2BpZ6GRTHUiojze1LozfmEXhptKY3ybnW4wKiR6JmEZ56Vjhvz",
  "key8": "2Zj3htwBL2g2dEaJbFb93XsSQKRoSf3QchzCasF8bnuXUQszjLwCzAvPCG8hVUbUsZYunW6Z3mLz3a3dsVrcpNVu",
  "key9": "xTR3FrjJircy9E9kTYQeRJjNviGEXhaUq2xu7xUfq5xwhfNMtFPHeDadEPXJu8QU9UWVqsYBqYjxwWyGUov2gmU",
  "key10": "4sqVcRRsQSGFR9FMjb9zuEvHxppYrriRywpzrmSRsf21oERKTNhUFSKf8CoCtBBfmNbjCDfdyMvz3v7EqDP91gu4",
  "key11": "4KPatPjc1DdR3yBAZeQBYrJY3eem5W5RCADLBjEX8LLx6fVbgN6FG16vmiAMoJrLqoWMqspz9M2jjwKHik2iKnb9",
  "key12": "5WDC6fc7kiq3hrSmuSRKV1nNGMDu7QFk4HhtQivEDVtVvWCM131er6S4B6JCBdg37Tc3u34pJ5R1WdfiesxBuGwh",
  "key13": "2ZjNdBQapsiiJtzAXwz2ZMMVDsnB72W5GnPHo7tpxi9kE68pHwCompHe1LNQJ5bpWcb4jHpN2PCt88ASFnmKVQpT",
  "key14": "3yL9i76CCR9SgZntXerTPvkfDdbBEbMRpYLKPu38eLKq2kKe1uR5dog2iF8W9hge62b64CPQgRj7xibgwfNL8aT",
  "key15": "33kGq9uY48gWXSdU7UsnXtC5R4zTrbisynbsDKUVv8Wykj639K3EJyB9q7gbE6m61VfZ7x8sQLMCKD8fZXxUW3Sv",
  "key16": "5xskruuDECgTcekPRAzg86fvbcmfQ3eNSKNHV7zhaFgBUG4qqRsbn73ui2jUeTzaa5iWbnbMvBSpCksN4aWKWRoy",
  "key17": "3pwz6SY7Tud874S1dW4kzVXT5U88xo1RjbP3cTkc8tkWGNXH2Rir3nk5iBGbvd8qwKvL7BqBUZxBwfNej8rYHhBa",
  "key18": "4RPpNEVNs5xuM5DYp2nD32HFJ9g63e5kEGVtDvpJVQhMpdPuo5ic9eRouZB6BBYP2YXMBQEnZZKRDYntT1Ejm3bg",
  "key19": "ryeWUQP2ny7kJr3pKmEtVSCHyySrhN2193eUn2CrQHGY839edzChQme4YVhZ3Py5ApZQMhmpmk4t4JV6d6fW4Su",
  "key20": "3X43PNYzyRMerXkam4Ufh69NNtXP8cv8M3P2kMDPWcnokak2jWxvNcudu1Xf9ju5xPKkTCn8TBW2Bs3utWuM2E6B",
  "key21": "3vj4oPdzArZTMDvtwvfngQkNLznGadpe9Xz5GNZWxBWyy4eh6T7xdg9my9UowQhpiBVW1abaMCzua37DwMrZnfUP",
  "key22": "2pSCWM6TZ6o8obcFjUHC8HzmdChUqgwC468Umd1vDhGZ7vkRhAaFFhVrhRanxDNszfYdG48gzFrEbSBHGGjrY53A",
  "key23": "2q7xDQsBNrhRSiguBRB6u5UU7QNbeY81FGAjvd4oYGPMyC4f5dkLufzDVcDZzkMBMx2Pyjqoh3c4nNe2sf4e2sn2",
  "key24": "4xvQ1NSNzdLb24WHKD3LyL9zCu5Cy676ioFCEWKEa9N1yC1JYyACWkSZApQUbF4BgWueNrKW4cGJhF3uYST8ffsD",
  "key25": "52Wph4h3TbXtyViQvchfFcEGSaphKVsdAHVdersu1idTEXsjTpcWSYg9mhK8effFZQsXDAqdy1U75aJ8ph8smTLU",
  "key26": "1s3krzBZft1DBUb2JbJRN2GUvDaFh7hxpDeUDBnR3QCDffAnaEgkw2E3yEiL49NkfLFohTGTLy4KCXeZeCVxzsi"
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
