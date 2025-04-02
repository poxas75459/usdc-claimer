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
    "3i37RcYvMJvjB7nxkLrBonedCQtkAatnDouqtUsJpMVJAHz3TUKfjbYRQ5KNWjj5X82aEYYVebWPfaSoYJFQGxno"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PPbACProqZYX3QvKDuuKpecZM9zKfDEoi4SXy1VGjv5risyVPqwKvXm3pt6K3idw3cYA7YBzu63GghqoMqKmXeM",
  "key1": "3ZcxgbfCbPqW6dcXN33HrYGdXQBR4ZSuqqLupLbosUwuEuFpg6zNGu6PoJrqg5LQh5b6hu4QTAt9joV4r6gBCpLJ",
  "key2": "2XWsJwwHS2ebADUJgLdjh57nVEarkywwtnhdkgppQTJEz7hbWWgdk1pnNwBZ9Hm4AoHdiuNPQFTRo3ML1TmhGRaH",
  "key3": "3DtJouHDPhmzSHkwxbkBZkoa6UGNGP9KEpdXKaJLq8gKdfU9anxwzhMw1JkknL8mV5wEyjquA7nHd1Uo5ZVfPhN",
  "key4": "2o4wKUJRXkLJPN7jrT6CX9EpUxbmFkzpyYREAFZKbLEFMz7ZeJkzWM8aWVxayj7bd98HzPPtidVsAnWFRzCXcfKx",
  "key5": "3bhhC96ZLgSZ36U7BMQ4TzUNxqrEP7ubV2hcypAVh8di6SMCuxGkzwDNA21zQMmeanqfreHhNG3VRaH6EwoDSFPn",
  "key6": "jhGpZRiZarcyZdwar6aiAECzu3fGXr3CBwtGwnAfEM73U1kDgMceVyb7QkczjUpfYAE6Wo6VPHBWRDqXrcH2gRy",
  "key7": "2TfJBz3Pqbp4knV6EjUMLgCKG7YCcGiMyjYUq2k5R4YYsZNJmDVrBeBvhnVoZENR2MJQWkZKtQPNtkDSut7Rmqea",
  "key8": "4o6zthZGhDwzgr3QXwVVhQDxp1oKo6JowHY2xAJ8mVcJgEZ9M7UYVFsVnDhn9DK3KrvDZt2w1mTHrD9f9x68MisB",
  "key9": "5QVCCpCnsnLgcSAhhFbP2jEX1KenoXwRN7W1TRHCDpZGbojT2PJx64pxTYdd2ePjb81aqoWg249PuMTKVfpgUWf1",
  "key10": "4tLVoxJqqWWsHhaUdkYWgf5kmRDHhf5YyDgVQ9NcDxvEh4PhEP2axkzyjzyFfM6XJeS6QVi6k9JMELc7T7hZBXX4",
  "key11": "5ox4BaNcSuhfp2kyzpnQGrJEQBFLfsCzPzhsZjyGrbuz2afsgMVph5oS7NTsDwC3vttcD4VpGQk3MbPN9R847ogo",
  "key12": "2NRLE9a11NSDhQUEbMEcJFLjEsjLRJFHJV9dnH2HTchA2rhqN14cNMtbmkdLY9G91qeBGD7a6GHWNk6TsTSs6RgR",
  "key13": "54QizCSKSdvxB2CpGQr8AvfH1hP3LDCgtrAo8DsGPYq2D7iTtddc48ovSGufdiBWw5ZWDVHc42tEMYM4PXLhdTfH",
  "key14": "3gwX7jT6PQGt2qEcgRggMJoj3kTb1fmCsyUYXAvazjaNsa3Rc3gTQxf1iySS1wjCzNaBYfbspDN5EaeEDS4Lx45f",
  "key15": "2Uxcg5ZJARL5143A5qZdNYsxTbf9cgYJUsjgZpHRy2nFMs4dGYoaVnfZLY6bPBuVayDma5hvtxd37Eu11Jmy4nVe",
  "key16": "3triAwSYDX5ZhfLEgq5ZdvBmMNNACdDf9FTJrNeZAmGZqWnw76ETUyXKAFB1P1cAse3gXYdZLs9aoijWV3xUMq28",
  "key17": "xUz2J9Tb6gSLDia43ZEfKt9PevDr8dDhAV2cCoZifDVoBzf8zJcMQ8GYWw7xcKcfxeuYZjgqMioEFi7Tf6yNfuG",
  "key18": "4LgnDDmZX3K1HQ56chAS9q59QtkaS57NerUGrcQqxGuAHLhAFwAynmta19gTRmpPM5Sbry7dfMBdq6mDCQGttSNS",
  "key19": "51QqpxD9vX5Wxuuds7Sihu2DiD9fdLw3EkZ1imCnRSyTipNkR2TV4FjWqZBiNZrEMBiWLaNLy7nQjqtWpCeAXvr2",
  "key20": "3Wh76XSFbuGxBKQkUxz3b8cQf1muPUiDRTv12M4Rxg9r25KBjgWvjuL1MK9oobvnzUPQxuQzthWJe2HMW8nR5qVU",
  "key21": "3nAgtWpqFA1RfwpasmHxWGBKL1iacqnv5EULHXo5EESfS59nzZ5ienyjcPqKGMMKqkaWLtwnxqN6Bw7YUYDMRWsk",
  "key22": "ut2eL4pchnhWcByxZYynJrcBF6rJo9rbehvuhn8L7sAUb7M1TNcGMxLiKqBoB2WTbJCppoAea25t99uoSba47Uy",
  "key23": "4bLeJeTvyve49FD7jaWcxZnyzvvyuTwFBqKB8Vhf2tt3XTKM9kur2xUxZBdbnhoytsurq2UyyVvtjt6a4QXFfMjM",
  "key24": "3yXT8uHcp4j5SnzZb8nWqSCnZNtk7SSrZwkFk4udpbmqMWFBB6dGT6sz9NyyW8XeX6vuKdswcVBgPc1VYV9mddth",
  "key25": "3wbEmMvUk4rcC4dUZYL1a1TTM91WnrepprzfSQANejKskxEk5LHZLqtLDTwGSTYxZyL3zdKJAt6EKZaBYo1PWAic",
  "key26": "utJrBqGg6zXZ7Jq3gYghmxSPtJEf5jbXH2tQh1saWZa6hF34A25HQBDyfz7A7vqjo6BDSXsa6ZsC1AnNTE16Nws",
  "key27": "2EwEE13sikH6Vhi784djSUxZBKv18UptsJpNHQ6stcbGSj37Rv5hwpjuZaTj9vgXbYGszhBLcwoMpw7hWqgwrVor",
  "key28": "5hRhtMKM9iHsDPvcKhzbTFuY4xsN23FPaNGZpxRUsDeiRKz2r1qdLELjf2CtsfT2qo6bC6ro891LXGSHsuG8A7R2",
  "key29": "2hWHmi7NvyZwe8wxgd6YDzy2nSEPkfQYhfBDdTPxAAgGShpoUoWX6hPNGViPXSH8cgaBM7oGSQFQbwfz2RQbALmC",
  "key30": "KvJDUDtYpmgc65DopMjsoMAVuLxMeLr7APY959SDNLoinxdmoDNn5kwzpL1H47vreE7E4DZPuqkpEmSga87CFFD",
  "key31": "46YNKn8QkAk8FE7WqzDRgKmRtE3MfQNwu1qH3ic5EaAhLxYUoA7hdQeyjdYZrpyxTr37rf7JHMM3EvVAGLMwaA22",
  "key32": "4vK3qik6A2EuuLenYVevAizS2knqdHcUD4UgsekVtw4SCwB1WscgNfw9CgEdxNCDQtYF4LBGT9VHC6RvGzaicijU",
  "key33": "678wTDRD485TNNcyumBk79MvJNDndJDHMp1uuUTcySC9YcUBcgWc6ZFqce7crY7YQN3ZzBJbvy1zn2fDxg5cGFcj"
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
