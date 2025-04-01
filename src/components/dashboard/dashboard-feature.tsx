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
    "3ULRgLG3DQK1YXbaECpVG3xCVSnxeSKxS3wPHEbyaoDFrc2uypPmDugruPEfn3tNvjKYZ6WXWY1FWGnTrSjBwmkP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ascjb77Po2bjftV1HwQtJrbJc9KpzfikYx3tAKrq1kdqFHdeeRm4ybvsU2VoGKW1YXfNTqWKL5kffgqpctcR5id",
  "key1": "4r1eMMWHMYBKKNgWwXLgupzPRgZYaAhDka9CuDzA2A515wd1niP3VuZFQxR1s5ugo7Ytpqrd9YgGZLPTmx3kWWmv",
  "key2": "9GKW8scagz5PDZgSUtTpiM9MYWvTCpn6hJs2aXSmktWX5GQaX64GHwrYfmUXh6iQ727ePXrUo9UFBpbAapKZ2mU",
  "key3": "4uDMF9ZLkRTkwV8KFydgoByY8ca1Wxm4HmTofHnrKXiEi7dxBQAw1woxp4MMXSUexegAVyk8w2MNg41nFH1NrLHH",
  "key4": "127ogfZKAnmZE87nppUUc2ggUz31CmhVhfp4SbkVJCPnae2JKhs18R3Y3JKc8UoxJRbS325b8Q28YFMkKvRS9SiQ",
  "key5": "3AhZxGxsEq4QUyU1yS54UcSmFDuwudfpTsxLH4JgejRRB9qeoa4A7uybvWosnowpKisfcZU3gYBDqg1rQGJq332S",
  "key6": "5BzQnf2aRDb9EjBoUY7zg97dXtQ1uehoDgNtPC6NVsfdMv35xdhyBor2E6jYhbVU3Wzsx1ZESiLHXkTPj1PqR7WW",
  "key7": "Gx4nvXNkhwq9Vki7JPdouF6iPE5Yb2p9dfj7uiQsvxHExkjX9F8NbV2zvPtNkw5pzSs84nJoQXUFYMLXaBniWBe",
  "key8": "2HximKp9u4FWcqNAZofLqvVYYGMqp8UV1jnNtyE3B7DHxcj5Uk4Edz25fSyT9GxiSuX7z6KShF6q5ju9uSQWoSbU",
  "key9": "4jHw9XBLpMitvu5UiKEydSnhue5Rw43Esy7gkA5esvxLdKfTTLj2vsMemhtPFXFFQubXGfuUfYx5dQDYbMcu5Tjt",
  "key10": "2xneucdFGWYYsv4mk5MSDBU61uFbypSnwZ7k9KCrwgGGjxWE48skPdV27DaYdQSoE7rnF471rhoKqtQn466PRZLL",
  "key11": "4VKZjPZ6AmGc81HzPbyBA2EUfxdQdzppssr9kk2byScKHv5FeDSqomYysEzHmNAJDRJ4HjHM2baThTunyMDnPPcC",
  "key12": "5bE7KtLjXK9AfVgKpd1yGJ8DRAm2uqbvNWBBJXBN3KJcVN6CF5DR6QyCgWRZvXugYdrCbh98U736EnNqR8ZgtPyy",
  "key13": "3Nk2g7uCzNdYP3YkQJNwSy8uSs2bS5rztQ8XaXrjkiZNoehT2Jk8XjLZHq2G2WSRWhfmHxgrmoZBwL6gyzUJsf11",
  "key14": "4Z6k7ECN1zRq1NiejMuvGRjJUQRhVih6EgGUZ1xYzHHQbnXBu2rS1LwjPNwASXLNk9NzMU5cPXNvrco2PkB3Q5uw",
  "key15": "C8JMgJp7mn1jBxyAWjiiHDdFkQ2373obewP47J1aCLU2eVYKWhhKGtAujEU9CnUhVyHRS14iKDA9kGUcuA2t3Fe",
  "key16": "3VtUDUpRMLdAGdBgTBjm65TKR48d5RUsHHyMtEzK3i9qika25yGt2CYMTaLrMATwPpxUf8oPRoBs1ApxKQySJBQV",
  "key17": "3dZhpbZTAkkSDm6X7d9Ps8JoD87J4PaN6xwT1LaZEHBabkPgYGJW38qiWMvwJxdouHfCr3MHmitu3dXHekR5xXMr",
  "key18": "5eNvxWiXD6iT77EGc6txfAc9WqSU7fBSV391yQsmw6D3dNG7aSKZuFnQ23ipa72bNYrSkQF11QWHkr1S278xnWzK",
  "key19": "SgcY5GZykvYoTtWjvctQszDy5GDfQWSpQqNLGrCCA2PTfrNkCiGzdSFFdM8yfEBNtdxHZKoRafpRuL3UzZePLAZ",
  "key20": "4N69DhikxQVs3w8x7eXGyLPHCkMZLBe7d2PMc3zQmDts75But6TCLW87zvuJ5DEjYEB9Bxj1uiX23HizPAXma1F1",
  "key21": "5TVrHQoDD9n9G1wwzKhEtTJcKGusedvBbWZK3zBXypMStLE3wYKznGeaLisHYAnL5htSBtHZAn3tkpCidukeW1bU",
  "key22": "4j7fqC5zwzPxF6BmkvsuVpeiv6qV3Jp81ojC4q7n2n3oxzHhEfYx87AhaozFJLDkprdRBMNvsNockEeWqhUXbwme",
  "key23": "3JFEcnXvB89FFaCXk59TTFtLDySDGDv9CBS3eRDteMGg8xHJzb1CGifsk3v23rMoUmmfSCQTadJC5XV5SdhNBY7r",
  "key24": "34rXXiK7gXbDL5s1f1qvKW9JGVXeHNUuXcPFhUGfdk1qh5wwwmUSpaVSUH5StvkxLfQ1WzaAqBxTFq2FCT5sgGG5",
  "key25": "3sYuiMNkiNymRL1SVKTUSQqr3YFP5JNKTaxY368k8Ci8k4BRta46xzVU7n5wP42ZVCH9YSvYjmzyhQJmWx21sAzj",
  "key26": "nzFqjAtw3ctDHkpDXBjRpxG63hTbzevrR8jFc5adGQFst5TkbqzcTNDuMxZM8HZFYpp73FH3MYVcSWSAUg2fv2A",
  "key27": "4thU1Ht4UEFNpEceA8w7Rvt8Fr9TEGdfUv7ue3vCd4pydX3M1PW7Jz6rJy8CD7DQ2h2RsCxNWs5AsXy86ozVsov1"
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
