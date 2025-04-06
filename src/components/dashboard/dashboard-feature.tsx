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
    "4dfZs1ZLy7TmTzznBDtX1HbZhSKj1FaH4kSRk643no2pRpeQU62PjSbS1uvUaeis7JrTDNGxmvKJnTGuh7ZmvSQA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GW6pTWoY2tB5Lmf1QBj5Y5BGVpi5o41EjEx8LC4ADQ5izDBfxC93gFXAxS43z9QRfjd7dN7zuCNqnLU6A5NUCY9",
  "key1": "z6kbs6xauKoZjzsAcMSnoDQF9QhXqCb7S6RaJNbGkMzKU8YnwDemURgkbjhNC6tXN9pr13hHC9GuJiRPksvJJj8",
  "key2": "5m2aeTeDi1hrpaFHozEK2pAFGJkQoooX7d66FokPXMtGUS5iLmYZn3gdAABjsb6k3mT8xr2Pp8HvhKqUx6abHxeQ",
  "key3": "4E3GbWw2da9X4jhRFnMUUPtvqk57PESdtT3GrKi4QaoCapvcNPs8m1zA39dHgYVhtejfudv4kMMmV1FFUv9au5Es",
  "key4": "54eDJ31R6b8ShPDzkrfq6jxfLDh46HjwNNE6v9b2Dyi84gTdigaJgo61nzswq9PUASiwADcGDH9TarAouyGt2WCF",
  "key5": "5sGkFyxPjQbxgWwmVTnt2s6iwRynHo6xh2AAQDwVtuTc3VNMRZ5BFBkigZ4c4o3KPvfiQ83P2s5tv6TVZUah9uik",
  "key6": "2aRikwzvRwc1eV4Yst3r87UrY1peBfqg3J99jaHLc74Wupe5dQCrcqZ1YnkfsuGm4ZfSDqGjNhdGLZA6yhYmb4ae",
  "key7": "5LGSNgwf9Hu8tAnn1zgq61qwt63FdLPMgHozxUdanVYbKakBAGRrLWcbeDsDUid8DAodbgVyKKcVWfCwaoJruL2X",
  "key8": "2VaVYFT82qAx5gGGrq3NPiKcnjNSkfDttoKrWobD3nPXbVgk4gsyqYvDxE5Rnrg1n7B5qtvKXmaPWQNAS3wyorro",
  "key9": "2g4sqhknYrfm54Wztgr8mzi31MpVom8jxHujW3RDa9MxAn4fgYZEAbCagPePf8hqRoHnGJxobTZPFYBXpwVfxbdX",
  "key10": "3RsxZB5gWAU2xwJqofEsCNAZ9MNn32Tm1UZNFXymKLVs1Ue8DLbHBXbRUGD2NyRtmgcKzkvcQgWdfSKhPY2HinT5",
  "key11": "323J1yypF5h3xgSBHh6x8FFRBWSr71c5XGYyyhBmwoRnfEtKnExTcEs2AMicyunVFpjKdh1WH7xSuVHwcbAekwUR",
  "key12": "rukBR1WP4BtkWtLZpNnv1Rxi3zURBXmN877XE7QSo5hN4mjXPsod7gj1jcfJhA9jUpEaqYgaroJLeXM11YPobkN",
  "key13": "3jdmgLtyFxVT1XYk7uY9mb47fr4mqVuuwDGMKdPbtez4DK1mdZS7oQRhfBvQdvMe1EjsNFgzSWM7g8pdKpiKMEBQ",
  "key14": "2KDuRufVGjBBVMFzYpXsQmjgo7q33MBgwAPMHHQTN17yd8eysdiRrvv9JRmYPF2CNZK3jDs9r9guM3oiZgfVqvBG",
  "key15": "4B2VwSJ2UjcLrqnneojVUzwQeC6XLcmQQTyjFjsLSKoqBuWHLNUvtD4EJjMP4Gds8aMw1eEa13cNSTWg66o5UPcT",
  "key16": "2YZH6NgVB78ehcMpNsb7apTgVYWqBYp7tHdwMyeeNTdwBZ8VuY5wXZSBjEYb3QJyt8KnxpRZLLyJhwHHE8xfQE57",
  "key17": "54ygHMTZFhU4QfChDmwk9RxhYZ4BJYtnbSGUyFJ4cgiWhrvohtq5qtNior4bRUpiEzrHGdM7HG94Prr8ENM2gZKr",
  "key18": "435jTnzbhTvRcUaaDsXgWmjnXFiT6jnJA9U8daNmdbgCiMxfeKrhB81kN27VYYGJzTWfCvc1QHnLNQim7Er2iuyB",
  "key19": "4fVKR9FNUUsNp4UnFMRECQA9huXCFR6voZTZ6qzjAwWjdVqopPkwc2Le2wP7TQpBAsk92wQHX8sohnf8GpDKr7ev",
  "key20": "64Y5bmTEqBisDp5GqsqzF9GsZc4oEVuhz5TKzszJQp7MQF3V7etD6DVfqw5yLqJhxtiAFrozcvCErTfkjv47y6Dj",
  "key21": "4ia6B2kAiQyb4ZJfdamUr2QDSTie1BgVhxd6LAvHkjiw5hRUpDpXgs8DAzeVZeQPFXFxh6rDuB1xBySf3PmjBtQo",
  "key22": "4HgZxmLFcodYg4XR3Pe2mBqjv2gXZjTK6dT3HNUHnvydyFRLRk5seG8hf9ys8EfvoRdTpfpmWSgmrLSY8TDMz1qQ",
  "key23": "hB43Bnn99LRpt7C8t6wo7Q5i1QkbFuZ1F4sYSCS1PopYYhtFcncMsJQKjgS6qZBW3qkha2wfznHk8F4RQjody6J",
  "key24": "2qSUaquNHYnXa1kNySLZJPoirgH4qQxJBKGjG76rEiKF3Nh71snnxEgwo7TLvFmgtrZFFtRHa1x52xq1JwMmLz4U",
  "key25": "4WwuRE3D5MMeyL4N56XgTJtWSfXtLaJawmMQ492LbUNubGwz2uqNAbj8nD6rCN6LZSkizqrB5fxhciU7DN7XbfVY",
  "key26": "3JXHasgfmhLd22cDHvJ5fc9VfEDovMRMaT2FKH2SAsYRsavgnEfcQhsMeL4XBfk9X52nKLvpS34m39fxUSH8KrWe",
  "key27": "5s131v6LkZgvS2Sy1oEhgYn48SymvhPbCu5QsHKf9HoJEi8hXLDaDVMSxJWRCAYZQt9VscD5HfRp27wew5B1Wuem",
  "key28": "3d2RY7hXz5vqASpr3LmFf7zoiUxUJBYFm6VhdSkoKTLYwK1Ct8YfEhH3Gvu5MMCKKCAQi3uxYhMGnYQaQHz2hJgP",
  "key29": "gWCsqGQdQBmaH9BERPDunwTJiCiTu1zRAUfT9UUY9FkFaz8ZmcqPFnh9k5rm3XqYM7AFPuY5wrfgoFS9nwyCXEP",
  "key30": "2WVM3ayERJ6UHHZT22pGQWLZprafvcGPUxSJ6Yi1A3gXRYgqi3AVa5hCxzG2bbfx2qdLMaSAAmcrcwZx2qjjLdv6",
  "key31": "2UvQbDBNDNnrCNUPezJXvkREahJ42LwRzgUJM4Jnh8EeWxpEuhs8X5zapXpwSr7oH4vdzbQ3iAGgTgNaQqj3YwLR",
  "key32": "fCii35DQUCSrGQbuskubcYHpRnsZvRJcmeEpNDeLguTJiH7q2TGPLQh4KcjfCshDGJ2vnYRsm72hMYgKYdy3Yqt"
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
