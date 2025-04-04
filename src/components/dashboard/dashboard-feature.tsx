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
    "4woRaraqkzSUx2q94jshFj1aYof1mnquLN7totGG3HsUTjEEupe9Jw1X5hcB2oQQVWUpcwjtyPajeLihUhxGp76c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZzjuXGsJmDBxcMYmst22JP7D2RnkwTk1LJegVEmpSgHmeXi4DiRoF1o8CTtuojomEXgLLmbroNv3DN8RBfoXwUM",
  "key1": "5NNy8r7HSXTqNr3B3y5RQhxVfjeCGmPjnGBpz9cHv7K4qP1st4UVur9a5DZCq5ZtK5pxxqrqHZmF7E6aHBZb8JsT",
  "key2": "cKYKiEXtMNpNSLsUbcUVybDTiWfQVxEpcrBbwLg7rsdyWBHhMuoo6vVpeL883wrZpoBoxeTanFDSMWLia4yCsG2",
  "key3": "5CaQxUze5fj2upMaEJBkmQoGtp3sMi4SRTuNE1qKwnrLrwmZ1qAmps4394GzdBnuYbUc4KC4D1uwDJuj4GarUdH9",
  "key4": "2r2WwapvA17jigFuC5XaFVSVPdUKsjqKt5coUUdUQJo3w97vEErtX5A8JEZtFL3U6BU3Hmh6uizpezBuGZhK2h6H",
  "key5": "3dpHDFjt3oWjhTD5aB1YT2Z7osmMKhvnqC3sRJdrKfx4XKgDgs2vpMUPvA3WG6sQniZJmQkNGMTygJBkmNymdfTv",
  "key6": "3mAi5pwBXX6apG1VyWsex7BoQ4J6h4Vmqxmvk4Li38wUB4YtfWQaE87NshCESn8Cyae3jZGiv6QHDuhoLG46SuGH",
  "key7": "me3QvYveXpRiQSMMvndHGmAXJ2B9RFX2taSExXxyaWKzJtvDjo1u36x9Fqu35aq7tvn7KgBAACTQvz6vo3jEQz7",
  "key8": "5cCMt2MpNkWUhnHHhJv7SqfzHq364qLiNvV4t9KFjqNQK6khxD9dtwaHRtmuPktDtVft6kHNjFs9GAsFQnN6a6k9",
  "key9": "3xpTwpcj1jfufr1tpDPuwYhyTSEo53Ac2YZhzcYaJnbYZiPZai1D13bzJPu4RDAdrXDfGohzyHxCg3Zhtes5GVRC",
  "key10": "tjAAUfv4uPgPLviRwFATaM1v6Yy6qAyxdoZyEjHXkphD2hc4TQ9ptQMt1uuoATLYou4Vg6Bh4QS9hQbVTVAet2u",
  "key11": "126S7Nu9AR117zUpyzjSdUQwTYStVxoXxeHgnu7eLdHVTRDNZxxTTwVhxH8CCyQqT1X8phpRcfha7g3xySsMC6Cv",
  "key12": "5rRH8mLRugR68MkpQcujoBuduf3hMbPafKn4pxxTfsggWXdk5x6JGAnaofRF6SfuLM5Bbns2KzxPFhW3kADELnDF",
  "key13": "LxvUviFxuEhH8NewZTQ4Nzqem9JZ1tnQLK2gNbtWL49om3GziC1JS3GQhiDBpfUHH6rG583gQAGHMhxjJiFVuex",
  "key14": "46jGpPuPCyriiedssnHRWiAgnL7Vq48N65MbKZX8MkpbQcF2HxNSoBjQ78w49aMh3QKFhYe5Kdrqo2ehHooWtE5E",
  "key15": "4yMAxRuk3A7MzBdne1Kc17pFSoWpmcEdp84HmmMqoKLaJJpNQuyef2aefNWyF6EqBsraX2Tj33ovML44RUFXsg7D",
  "key16": "3hjw4vkJ38Cbfq7YrSvYrYYNkyQLngGKRQ4kDaYCJYjYv9BZQ49R52hT1BZwrUhY6FRPFG2wcbaifXH6UJ4kEowi",
  "key17": "HZx6djVzab46ci3RTN1kfJWcVShYxi5AC4vQZeYmBJZ7yMcQuYGj5VddRXs1FUA1rTuiJf6Lho9mtMy1dB7bqbT",
  "key18": "5FDgL2XcRKWR9fxPjFFkieAnXswC36ziKEbAUTYus6d1UShKAMvUvDmAbBspqpPXLxEAxJyCL1APpCbT3MHzrJ94",
  "key19": "mJHWcVWYpuDoECyQJFqebo7up4UWZte5bQ4HnBWaHT7odd2hFvbU8kPh2PVKtfDPoQq1xKrPEcufqw1r8N3vNh2",
  "key20": "5TGHG52Kv7izTtEztpKLqVNbURU4DheK8Z43qeDNsFwGs1D4WZbT7eF8nRfbhrgdv6UgyZz5zC1jyzfrX1UGk1Jy",
  "key21": "2pNPPDQEueAvQToCMGiBkHKxvft7aPSKBYZcM1tGdz3g6cgjXJbCN7oDwpwGkmQYMk4ZMZFCuBFdLxg8RWXMjCtm",
  "key22": "5KrhGRpqpZJMZYXEHzgwMKx7ZDzreQmwHNYGuYSHi5ydgJv1DDmMyj4MMTUFWKNmHXsGMp5gJSiNgCShjgPH7Fx8",
  "key23": "2wzGjeYb6xpLeCgWM8BRq3cjsqdq3pdgTQgaft8ML874mQuqjEwMtZ6Jbo3gNwi7kqUTj74Wo3V1KLCuAbKrnf2Q",
  "key24": "4XXnAehNWkckPoujMr4M4UoAQ5qXSXNAk8E5deqnKqft1PpEgPzoCRRj694T4uCVyw4SUHSQA2pXz3EDgKADaFLs"
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
