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
    "4qFXJfL3XGFuZ9RvKRgZAoVUBboutJvJkDckHH9XpUt8jEsYMohME2eZvWeBDvBtNrXenpCqRiKW3CTjjaJYsBRB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oc9vhyuW8moAoeS33hW852zcHQGAPoJJiXVPW5gCGcsuuDxY6EWDp8uaBtdd1M3qKVFZBx5iFZbajtEhS7tS9RV",
  "key1": "s6AqCFPJ6qxfFxm1o4JH1ZLxgUR9ThNjiAA23zgVFq3bXiXWPpDtUeqZ9q3hjoAqji8ugdxGh5se4xozfHrdo7w",
  "key2": "2cH9VkZ3BPUDnpBWTZvSgNHmsvH7J8gXnxga6Bv9mpwefa4aWSm3EGpRrubrTow7EJ7UcmAndEwFd1dhr7jbyudZ",
  "key3": "HmB8BTEe2kFki4VC8wszFMYTKfYpZPbS8PdBc8zMxJTiTJ4nhN9uohfU3SsUrPxTV3mh1MinuMfhEd5DZsLePdW",
  "key4": "28sxP4MARVfGLpxdQD7g1mNQmhxycWnAJ7D58WJwa2JjDzp9vSK2cwJvyj6LkXrLKrqryfyzrWLKozboYDo7gyHp",
  "key5": "5jkyGWtZKcJoxBy4GMkgHZLfh9gPR1p8LMbpvjxWtX9B1UDG4BTaTfb8cz7XoLdSfSuuKunRmjm3br5rDNqcpDXC",
  "key6": "4wrBJdeeipKPwVy3hW5gpL1XyYeivCEvTzhBYxpiiXGYbwxLvZSRpYE5Q7RraB1yuUsP7jG6Nf1mU6Vn1krH19Vg",
  "key7": "4Qw1YqYNu86rcwQnm42LuYHV3YnMEX1CiqX5rkXJttHXcWzVygcNWBNfNSBzULY4iEYcskA63GAcvbXCu2iiaepm",
  "key8": "5MKfjYHakHiT3LMqv1AAKrNmfLZXe9ToVpzEKEiyDDBSFgy4omRwzookTKtL8TS55SyX9fB69Gkn9XixsecFmw3W",
  "key9": "44K22z263gx5qJu5kcEJWv1Zx6acamuNB263tqPVXnfryaJXfvV35GjterWL9z1LHWXSJ3gRP3m219Gn3z9vAxEm",
  "key10": "4wnzhWFu8ECjCZxWPSZP3rm5QWN2YCx4AVuCYQcW2864Le77wkaq6UL5gJczxsGSkwbFm2pqCCkSaJTTymKNBRnJ",
  "key11": "3iSDm1qvothBLdgzLPCJzLixYuHpKzKtpNLQjYFKzanaa3W6kDQpb6saLwbyt5UAVz84fkbErXSBe1TQqU2jraVt",
  "key12": "4a5vpBfttqTdWycAUt8JdMjrSE2psjN3Mva7hXcxhGTyMEvQFTjc73wWyUB54TXhBtHWCz5aFZymVm5XxT4RhivC",
  "key13": "5EpeMv35Hk1L3pef1exbZ1ukUQhfDJqLdsXvbkRFej4tBmLJTN7vh5QHgvDVnc28Pf5FaYeUTrMYAGCzNvbeQA7Q",
  "key14": "4uvhHE3jYrJPiT9fGRJzTbcs41v8Sc9xaXnUJWtZEC7YbuNxNdgYrD2KfXp4N3vBPnvMWGaRtwwMD6bn2xCFBJrL",
  "key15": "3CZS2VmYoNAD5GKhbZ5MU9EkDXG7Sp9EnE7gzDsRAHxiWh1CQeRK4oS7Qf4Y7odXoj6AanQGuJBtDdmCDR8pfA8c",
  "key16": "3EzqMxACGkgu9BmJ7riYY4p6qzr4ex7PR8ysPSJELoQub6BSNoVSrKVgDUMrrEogPJTkbdjq5PHRbbVTRXmYno4V",
  "key17": "3kAA7GKa9B9qJEtEKQ3QUQcdhxzbLu76fdmiNQ4Z23zBnh4QwqjQSmg9ar5NA6dKNaNJ2RHAuymAC4784Lfwsuak",
  "key18": "5hYfwHinKwZuLwMu8sCSn74GGBPrVqbvHJZDWsY488gJtmTJBSMzL5cQsHsjygSs64qy9vicpUzn27dr9Dh9uJ8u",
  "key19": "2tbQd2RrLJFJgfHxK9HtFiD32W1WLdmPtwpR8BRQh2egfsbc1ukaHDbV2t5Mbi87w5mHcWp9XDbFEyQMaFA2tN4i",
  "key20": "KeMi3o6HZCMPrB8RDA4dU71KW7QVMCdwzcVNNGt6v5yWJgYjTQLd71u7GWSbGxrtXot1aaYt8UfEHJgm3rVfjZ4",
  "key21": "2aScCBbzqFWRoDTLqho6nUbjJEx4JgzWPtxVX74adQeAZbFuz5PRUL4rDnPmr8LAguSKEZVU6N8uqnDS7EMatjEH",
  "key22": "66siWtz1jcUxV5KwcuFUPKVPPYCDGSdjLPterEmc9jxuioC5wK3ubqWAiD5vrro7Xu3LrVkKG7zErquX177oBzK3",
  "key23": "5Ah8g72QhMCdVxMqQJF4CsYwqYtXhcuQrXzipAL5Xp7wQNAG7LgR5CKgBSUjsTyoFKF8SLB94Lp1W3dT3eSGxSR9",
  "key24": "5Cg2sRUuevNXNNHJhopEeAmcT1Ez6brFSagvbkcfJyDf5mzvuiSy6MVouAUJej4do2nA69XNutiFhpjADs1FUds7",
  "key25": "4g9Tod3jBzmWYhQwPyy8KPu4AFujXt8FjkBxxBXnCJQeR35XNz3wQ98woW1Fs9ncXpkEKWN4AWws3HuWgRu3MYPW",
  "key26": "aToiYFTaxDmQXbrbMFrbnNDs8NSWz33q4uxC3zVXJawipmH1e6ysHgDpBgHpmAmNETTCZbUPipPGQJrpR1qdHfU",
  "key27": "5SafeLbMDezyoyYXYha1ua4UPe3dpKP2uaNfWyvzMUb5y6ENGaQ571ntgogvJ6GVCBrmKRfSY3vntufnqesFy4kd",
  "key28": "58mssfdiYdP4HqrRdiBZHz4zSLvMZ8PrLVyKegQcRhjzYmsr3tC4Tdc83QtkUX11XjtSjc95RQnvbfVyNoJuixPY"
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
