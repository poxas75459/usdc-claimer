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
    "5nGYYhErwRP8S5BE25ezoZXyYBMFgiRSrgieuY2xSG671iUu6zuUwtuWVdHuWVQtnbHT8inMkzZVyFmQeznLKM7z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fEdiQPhBLni5Kurr7LLR73iCr5UiqmQDyHp5TtRECbcUX7WweMwwFFSubqsAbmjSAmmZzdfuFCb7dfw15An6nKV",
  "key1": "3dDx9UAd5Pe6NiWi4K8F58y4RFJP4TiWnFWUGQWDyZ5eZKdQ1Pn5Ruao4Rmm95scKfVekGnYvXaiarbsKzYuh6aY",
  "key2": "4z3vuUa2mf4CBRtMnB3pGRVm8p6ZibEpcRocftbzzpA3R4kv2ujG2k6wDPsaxqse8VkrTprsG9BXcEj2E4NLDEDV",
  "key3": "5Qdc3r2Je8trDrg6SbDxg1VXC8UnjzAqateBVT2FKGAjLJ4PKVZsyQ58VBhyRKm6hWSvquGcEVGoxHfBvVLRfEa7",
  "key4": "3U2yVeyTqoCvJ6ypmJzXf58CbRv77K2yDg73Y639LTowkZjiRNRe3uv3wbcaEFg6Z9pCh1oyCEjeNANPAGG85N87",
  "key5": "5rUpTumtA39KTuhdRJD6GAfsSDUtwa1Fs4pr8X179uCPKoyQgEMdb1CQAnm1hkEegxFwgj4pTdeAEmmQThfn4Jqa",
  "key6": "2BKGifMuvxF8kGBsEbSEtFwtigoskxfwNkRsryD7Wqe4gAeJ4DXz2XJj6uENZ76AmJqGWrQJe9f8gqKKqWbASApG",
  "key7": "3oijbGqpi97FS4EG36VJx1qehCEu4dj8iKpuWyHq7saThGMeddiHHQMtq2sHN47s7j3ot1m6ociw2RHP8GRMiRhV",
  "key8": "5wzZD4baBMG6pZjFYcyCU2aj6CmsrPS66U9Ahk6kzExN6T1mVeKPgcV3HJJ1fPiLAgwHRK5rYY2MuP8zvXFq8Lj5",
  "key9": "24A3vkaBLzKz1hemhBTfML9vWYyKKVHydVos4my5T3nVwDhfoaWmZ3yWUdRCqC5Vs2VK7PTDamVS26SzyS1bud4P",
  "key10": "QpRSsgeY4hKFbBHNXw5dn6wZ3soE3bY3XX7mMedE3tNFKurSLqJGw5aad6JXD72yo8cbZiPwSUaATU314KbixUD",
  "key11": "2ToGaCufYaKZEUxazLkKqWqmHrFStqJVADTCmSdybAWhMBez7JjviDUvrTUFpCKmYBzMhWcxm9StmLSk1AdEzfyk",
  "key12": "wymwcevuLambdZfzKFM2K1EdrScgopGpXq7PMjMYrX2yVDbw27wZWBErues8pxLK1ybuYH1b7EJRw6cHPbTfoH3",
  "key13": "3myeCjUbyJEt4LD2enxJ199NvkN8ugQifL2ZdHu8BSKkiFA1ByEFqXb5A6NDerGsDWVPMNvuixYLyL9qAA1v83eS",
  "key14": "k79wwWpSwLNisd1TAyyK1SHwty52JrySeEJDnZpEjioN9Y2gU55iU8JhJTr56GSU8sbfP4KBn3dsP35YJdxvamj",
  "key15": "4qu4LfJXB2RBAGXsh6cyzxsZmofz9vbMNBNxTEVRLdPz8CiTeDWAoCr1Hc1ecXDZusot9a5hdCYWPPXEzAJrBMDn",
  "key16": "3frYg81Q4YnidY74D7fyp7ayjTbz2zpg1AZVgahppX65n1a84FFVB7DUFWoKZVGQdVhj9ktNbRYTtFMe2ie7s7de",
  "key17": "55wdRMLdNsMekkMVyMMVjJFsF2nCjeod61dczLa6SRGaP9a4C7oHBupyPQA7xq6Qy7M4C3Zpp7cMP2hU35uJsKsg",
  "key18": "59BkdKwbXdGJjSBTSvHaMmL4trGFWu8tirfRS41R1wjKAN4X7oKUfP23D9FsDnD7PaqwWXgcamWDe8ewmR2ZMDJ4",
  "key19": "mA21fJwUEA2RKXdhiVdFNtA1L4a5BRSkCqKf2MASJWeKK13bkDwFRMEvdW8FTmkuXmZEsH8EMzcLtaKvuhCo2oC",
  "key20": "5g6pQSHYNkmXDkHPsbaiboNUhqDv7t1wduC4TCAwbTbLcMtmjzoAyK8ChroW8Ez9QK69kZYn58LVfYtMyEdgqNRV",
  "key21": "xceXAwCsgmMoUXAXEsNtbRPfz7UUiKfkbDLDBWuSFLK9MQyptLXGsmKQZJuyTvYgNv2pPgpL2hybiMCz7R1Jhwi",
  "key22": "c2CJHrGsxoFPLTvfqJMbSHNAoBkS8HTJ9kKFRg2Anz1QQpDVkHndep8nXdcUzat9mTJ6FhBa8o1c6oXvnFL1ssz",
  "key23": "3z7ER3nnJokEPUjRv6umczbxCeDgUWSEAPXgpe13Dvxpn2gKeFXHS1kLsvc5G1bbu3L9Fp8QAwexVtngByPyzfER",
  "key24": "4wJMZ7DHe59z9noUEgreZkZsHX3kM6Y1DKQn5a3T5Gk8Ey29TjEvVaJKiauZr8fcXdUTfpNUq5onLag7RToptLLZ"
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
