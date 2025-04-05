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
    "2GK2N31hGyangoDJuSA8Te3ZjRTHyqTK14RB4x1ANNrjoWGuj7snD2x5a2UJnPqCdP7Q3GCu9UWwcH1ULfhtHYzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A2qzP4JSPpyHmjN44VXyeUoW9xtbGNymVXYdjLARb2aNQQiAwotHtZujrjAbTzSyqgYstThJG6PkJALkBinxRsL",
  "key1": "4vk1Gh3GUMrECe76JA3SinBNDibjpATW834r71PTacRSb7Q9GqQTnfHFVcpxbbcaAvrnWpB1kD2rSVyQESUfpMJL",
  "key2": "prdg3SFuy43tDYbgLm68kCiEPwinY4QHJiDbP3bo9AvoKjdSj9ePuCDKnrsV3e8taewjGvcnAo7DqvWcs3LEykj",
  "key3": "56GzGctEJw53nuV8bCXRchzd8oUmFiN9iPctnnwrp6GZ9cSxCpUsC5BQqwVHjAbLzGa7C2A5rTLvymWnGrap5q4y",
  "key4": "4hpeKZ8VEerKZMvKP8gJqPXAa4cyV3WAQ7N3FUFU9zFsK7NJSgVLgGH3QCbWuUsfD4UtarKDFJxu59DQShXQCDLH",
  "key5": "5GNGyxoWmRqNYnTzTStZBVqYA7PaUa5iNVZgPjEU53rdVyyYgbK1Zq6ZLbXC1RFz81k7389FLiMnbHJGQbNUcQ8b",
  "key6": "215U4HUiRJbprhXGvT595Hwbg2xAbNqFjhTCFuRt2sgsbYNkUutXz3JT2CwBS8aUxBsVsdEN2Ua8AZD5nwnJxG8F",
  "key7": "LyQn5iazdoa958YfJkYfmmAMDuG1KToAuefCv7KSHKm9GKPji8514esy957mpisdmkGJ1j9San7AQznUV9aat8R",
  "key8": "29z8g5j1FViGjyoVwHbRagCBLMn2PG1FsPr48NfencJNKJ6UNofdsrNxZe7Pzx12U7htDtrmTzYoCdUvFg6RZxBD",
  "key9": "3S6FpvyXJNouZ7f3FZf4MjYeJc5PNrKLQidkkCgWJ1owBFJgWSBiibVZWBhJtBHtRT52FU7Tp2Lg8Cph95bbVBtw",
  "key10": "37WFynSn6cqAnSThzvEDD6tRuQa1Eh1UdQpnUxc9k2bfo7rJJenexUfWFfgTG8hUmzQRsDEXBEyKK6jVWqV43aK4",
  "key11": "241qLW33ykzNxsQMP5BnAuTZXuv76guiEktfh42szReAFhd2PufgjEnC1yhvJNK1T11kMBdY2QFVGjcStw5KsSts",
  "key12": "QqfPo6eUAhDNRDok1ryZSvxVsxwL3snZyjinNx8jj3wmEvCux1FQWKqHA4LsK45E7Ltwy4gZPqh4WCoR4R2fnk2",
  "key13": "3WXDTRZnARPbGsbXG57qxD5u4ie1tE8dtaxk31pTLCCW5R8vXYrGbw4opgNLs8Kv4pvRVhHsgeWvjThXgVQ9WAy6",
  "key14": "AixEt8V4ar74W88fWQSWw1C73M2WDKdrvk72MsZHvQ48kX5Kbef5m4pyjFxyz1KhuGknk4hba8RVGtm57ThorLb",
  "key15": "2QEkCLFatYhyibhnix3RArqZPMKxCPNGJNmmhyXAXdHWjcAYkkifSKG8TNKSyruirGga1cQXm4tqDjSHq7zGPz5E",
  "key16": "Ca2rhzznvu2dp1rZVhS1H1mDBgBshaSL5MwLcHjUhSCdW6jrdxvdFmHCfFdcViqZ1n24M2rQUPKBrgcFDLv8uBS",
  "key17": "X9CFZpzN17L1PfPu8ZV4eyM9wAmjWGuSY1nGxphvDZh3yuH9nboh4mtTMfHLanj2vjHqXr4eSE5yAH69eydcyys",
  "key18": "rsbXZM2boLdmN3Mqpze6z5mzoAUYFwSSfvDSc89PLRnWRmbEozXJdEMeu52ha6yynRB16XhCgLwkzdqCKLM1kyH",
  "key19": "29pWHjtzhCVgZQQxzgQxNSqfzR5Wj2NgpsWVfwyXxVZaBV6R7fhEuE7tSkXwwtHNtChHD9scQrJTbM9dqFUHzYT6",
  "key20": "5Q8KH8kGSYiGJhFeGegJ3AAD35sbtrhaoDnPHfLuKJfTEK2dikoRZyX9QtMXGSXMvG945pXW2y4LuxpKf6bmha3o",
  "key21": "34kKk63LPfrg5xhCKgHpU39tyGzLAiKu1T8EQKRbfkSc7zaVCeAJXZzFCudNeekBm947fuSH1JTStxudfPSbSVks",
  "key22": "5CLBKoMQGSZAzvPZB7K1zuart5ruKm1oEhjs9EY9DCEJmwaoBfcM6VaSgx32M1Tbdf7wujbpZE61y9obfRSLiZeE",
  "key23": "x4b7SNfb3fZV7TJNXbuGyeL1h5PdUN75wVaAhNc3PpH11i9qWouqqGKpxfTB6od2S4KnK5vgrRU2ugMKHWHGF46",
  "key24": "Eu6e2tqJAbMqP4nNa71vyq3LXueGaKhos1SuqicWntwMbCHRkRJnUWGMaqsvvyUC7MMJkin3YbbAB7mjfW3CR4w",
  "key25": "4fZmXqYtZ4T34pPRYvkGsPESrQANXroBWARApNwA55KM1VoWzKU5D3heYhkgi95UaZGoKVp6Q83h8ziLCUZJUNDt",
  "key26": "3hXauaWZMRTnbRaF6ZCZA4oECyZ7c2TcrURFZWDNejH27fKdW5rA6xAw3UCa8NNWmPBPPSARUFBCDRcfmCjv4bnW",
  "key27": "3HSDEnGUxxnBVM4sQ9k892Go8m7AbZJqxd8QvthzxsPJthxJuzr1eg4zFA3xfbXuCV7FYayjphTCNcHsL5JtRvXB",
  "key28": "2Q3iJrxR4F4TW3LD14ZvXgnM17HKqa3PfsthPJp1Fw1bMtnTvWAAVpNMbNn3ge4tQg88fMrjN71UE9ay4NjfoTce",
  "key29": "2nZV2DWE93tBCy5eXEae1sHGbMhdqGv6qxojBoNF4md87YyQtsVDNmJbYJSiDCpiiJsLJtSypxXiJAVMV8XVVokC"
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
