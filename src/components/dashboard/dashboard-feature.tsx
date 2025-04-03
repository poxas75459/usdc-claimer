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
    "REtT7qBWyDRHcburSvKj7Lz3K3BCrPQLyHUQUWGwKJrr12VxnibqwuyoFrL5wFDKP14RZA3WGfWF5HUU4nSkrJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zXtH4hbCj3N6VyFo2iCKxJ6jiatwPBrsqC34msUv5cGaeFg2o6TCT9fLcuoJqDwUKiTQ9R4qXUbCWzDfph9Y5GP",
  "key1": "32yMuXdD2Tr68inHc57MhmmG3S4DQSHzTmWq5vBCZBPjukPjQhRy9ELmRCs5GGxi2tfLadUw6WwympN6xYuLL4Cp",
  "key2": "5kxbnbbYLwsRzY7iF9wFVWoayzHmaLwyTV8GCmY7S7p7VNsZ9PQKarQuZS2hA5qHyPG3BJu4w4NwcdPmRXSzTDCV",
  "key3": "2ATjDFFirrNh924bY2hspUSvxPjUhtoeTq7aBAgNhWA7pTNjiR8pvdZdKmHzziU3mtRwPF5NbDictUoKuxoa9ktZ",
  "key4": "3wqW1HdGyJ1NsWjs382xf4jNgWXQHdmev8vn4AcpBHaoaNUPTCrpvZNVZZnfcVRmEpKcT9eA8vCduzAsE77hNHhs",
  "key5": "35oi1V3YU2hUeJX31eahHa1Ax1KN1ZnvdTFiERDRD3pEvtc41XbRLnrFVhr5EqLkjuewwcyhDtUNRkagDzZr9yfe",
  "key6": "5d2FLahUrQvLhgywosyRTnjdPNDM5RNRK8jxkZUCmAfASY4Mt5gknxCUcyPS8xmde7C1NrUKMjj4Pyhb7qP4mw5a",
  "key7": "2E1GVPHRntdtqPTLqF3NLTikupn1DDonYbbYMe2ggzSaQp76ZrxUypneJQuG4Wc6zBAvbs3kT3CQSG9HTXe6YmZr",
  "key8": "3EVCytXtF15PcQcqpCP8swjot3JhNFd4jn2GtCWo2yWoR8FC5JasnSArfzExvaF5rMY7LAfmedxozmok84Vv35Ym",
  "key9": "7VmR6kREdZ2YFJxErHXXCdwFhe63zTpnfQ822HMdmb3SHnurUBgbEJ47BYABt1rXJ4u3EWFMMHD8HJA1bCVGVXn",
  "key10": "3bzkfGoLQcNBzMpBU8Mqat7254yCgH4tY7pGuxsdCGZY756ZEKxgUKWP1iCqgoBpWmdXoWkeni5L9GH623QQigBK",
  "key11": "bRKoQUwujebnx2PAz1a1475NZde9csnkWqW1HAN14CLpTdHYQmTn6uycxS3YdVNRLxHKzB41zzKXbjtLvtHrJHa",
  "key12": "2eQ4rmNz9QDw666byfUKG4g597LQkTfdJoRsGmGrRXpirjsUYxXoyDJaTPvujMANBtesVckmg7w34U32TtqbHJbv",
  "key13": "4BFGZvC2anc1hpY7JfMdnDx31CYkpxspmrZBf6H5UUx9DaMQYrv4JMfiBsRfAPNXoUSmceoc7FcUC5nrouGT1HY",
  "key14": "4nowU4rYFhFhYuz8DrJ2bz9eR7K9W5574MuJ6UBsxash72DfkjArwxPpziqdYWMFTnk9mBmdDmHs5DpjvYiE2ct",
  "key15": "4ptowtYsqudDqYNEuKaJ7WwmfyikbUpvwxLEUSy48vNcoKoCwHhg7jzNtvo14tL3wW99cknitPjuPXisfX8hAjHY",
  "key16": "EyqkKczd7cLsXJ2AkQ3TVNj9zDmwSAHyZisDuq3ky3sj6VSF6VRETwbupQA3qkHgV6ishstoDXQ9wt6xF3TuZ86",
  "key17": "3Cy7J7gYQqU4PpGNPqLA1GRoQUMA5AdHnWMfbMt7d35MckFcRCBtzLHGLT2CrirzogK5vyFBwHP2xaaCgdsPRcWZ",
  "key18": "5r2eszK2yUZw8JBX5JpbwjQ8asa2dKFAASNm4EVTuJizhRVEwsfNPjHsYJecRLRR1aTKWPuKfVzA6dcowyESUG2t",
  "key19": "453QehSiX4LQR26uE63PxaeJK5YwMRiAUxpeJzu79v4AvCJRZG8wCwP3yFhZxU8r4MCFJidQjSBKAQ6CFqciXTvJ",
  "key20": "5jckrZk9xPii1A8ELgepJHs158rqPVWYzaErUpPKpRww8TuCVWxhEyipP1jcZjUtj7Z8Zng6Y8nJBGnYVpUQczDM",
  "key21": "y4KCbX4WnuYK8A4SsSVDmWh9Fqagb9J6BBoe2aEeYygeHKej6FHwTB14SNeUCpgvotCM3n2DEc69o1Yd3aNyvKU",
  "key22": "mNcMyFU9TNFhXqtKWAAwhxu93FZEBrm1CZiN69p4r67b8Ke6o7GUVEh2EaNagvbzsvPLUh3CBubCXnrNeywgbck",
  "key23": "b3Ctp62nR4HSHJRCQt3n7iS3GWFbcoxKBcTDiCqc7MLCFigyxpysmyTZRZqSpK3L9FSbaRPZjSSxvZLoC1f9Sws",
  "key24": "2LkuGz9g2nSM8JCB7hWBbAL9arpUY5RJLytCZmdPFYUx5rmyDXzh4PfDzHGux4mmLTecC3bjkuU3SrRmyzWtRpjb",
  "key25": "3zFAQ52L7YP5eJuh4rT3yEk5wYaKHs9gTo6wafkWWVCtZs2ey3BxZUVj43wXs9zjRUgS4CxPEzxJhAxfrf166Q3Z",
  "key26": "2C8ed3qhvX8uLx6ftviMK7oGJgCaxhpEHR6tkGuNZGKs9v9CZqY5zYswTbxm8y9Z4F4jWPy7b8EmpseNjRtUVzth",
  "key27": "5sroWo3ktx9p9DgU63yaZaXxnC6AXwgXUN6GnjyUWVZ3iG8of5jx55KCWQBdMh5tVanWms22ZknLWAuFphB44dWW",
  "key28": "2QqeCJWPcutsGSSdALi5BzuGDMiq1CRain2PhYvsYFcLdNCb2B4er6Zw2u92NgzR9t2hYG2p4kC3cii9HkHzk97Z",
  "key29": "2JHeQFQ51Fi513TMG2UJNuQopZp3zn1j45D6h9SHeuew4Jd4xsgGQ3kujAgiKARhaRikz5PkX3eHfJQLd1fMNZLE",
  "key30": "5NnR2C6W4M5oZMLTvs79xZRFQJ3afnFkGR489ayWreRypAJDBC1vhx8KhVu1JC2UUMaWf9FQ1qi9qAo1TKELRfGy",
  "key31": "3kcciKPY5LoKSSYNhkZ4zDVdT7EQRfZV1R7ijq2gYjJ9drDGVRg8mWCk2qKEnyVHXcnaUADagug54fLczrK6SrnV",
  "key32": "jvRxZihSmNhb3xV29KjXVb79s1WMANzJyX34vawYttJtBeZxez5bT8qpCf6sK6NPWEEkR45Q9JQh5MRijEsmpMa",
  "key33": "28HJkdsh494SCmJQtspFxpWzGWddxPDKRWmZBRDvd2ecxqgtxXGG5LCGwQ1FroFpjA9vGRKu819rgh6D1kEzGQUE",
  "key34": "4WS7rFfd7XMPet73FugKbgyuSdnKbmSA7g3pNdz6pWG5Xx9Mnep5djFs8rmKVP5GauUF1M5sJKJNHgSnFJfjBjUZ",
  "key35": "4eAFoek3AGexPk1k8f4D2YpzzrJD1WJt3FWJK8cCx4zvTMWtxRQDiaV7oyEpcQDvCtx42BajDoWYNT6v56FvJCvW",
  "key36": "5qscF28gCYukVu1wK845yWTg8ko3hGHSTMrhatHzKgkzTnZ7N3tad9QN5YGNYUxHRmf5F3Px2qtopjqh35zk68CC"
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
