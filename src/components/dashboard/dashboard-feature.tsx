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
    "5Gt2gFeB2N6jsQb2o9mJVZY3BM5ziu31rpHqTHAtKNnhWeupmwNREtgwWgZLbschJV6o4n9F9fkQZUPwmTEWsYmy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39J9jDPB1fzFZdtwJGsKarVCU1XM5gShxSeFhEBh4nYCYQiLaA486uYM2iYEoAqvsyDySMz7mh6RPfYTQfCMQ2TP",
  "key1": "516rWAKtUY7qUJMncDNdHaWe5qvkSdjxXuCNcHpgTdzsnGSCumYj73o3rip9C8a4LkMqDUTcKdttTE996tzoG5C5",
  "key2": "5xnP3jK33CatqeH9neFwPGjef8f3aw5Xnk5Gq9F7xoiARsGgS5YX4ytNwmghx5TDSw5npyMFGqwg4s7xQ6oMh12Q",
  "key3": "ge3t9gwbm4DDYpbTQKGHfdurjRQwgy8CDuSGwfyb8rFADtKDrk6NeaizfBw28wnxVmt16yTTUvNstpAKfyQzWYz",
  "key4": "5WfnmqXYH2SoUiG8JgDDs6HKLRKTqMYqz67vwYLoyNERRyHXVYFV1QhUqB6U7sA9g8MXXD63aTqwRiEYxTmg6ENL",
  "key5": "5hM5rg6ayN5SwEVxbxpkwuww4AtjMdJAjH6Jm37oYGaZMZMEeBdWx2Nb2CyKjX5EBG3VLaqYmSnRJfqPvvSNh84w",
  "key6": "jEGw6x8jaMK4PrFbjQkXVG2sEntvz27KUBewcWXHx4QVGyBf2ZXmFJXyYg1ujZmMe9PLZNMrxpvaXYUScLTTXvq",
  "key7": "3hRXEGTsR64swYuBxYMCRKgjvjm5PjooEhmU8MG5PagYT8vRpcfw6tM4mtkkfucdJpZArABrXMmhiTAzZ2BVsxAE",
  "key8": "5KxqKitKFjXEqt4F5g9RmdCxuruKPsAANX4F82Vvr6tbJq1pnN6XfkXoKyvu5PTwsfXNC1iAJguuCzkjGjjzx4Pe",
  "key9": "3WLcD7j9WM3d1QiFnZEAvbX5caTUvwa648KChXoxroh5iVgwehVc78G4YzJYjxZVQMXid2cJxNpsM6wUksUuzPDN",
  "key10": "3xJzhicCSQsELewBFPsHWDQDtiQRmRVJAuBdfvRysqKzpQNdgCCuNX3BLEsS3h9cm6U9Bqt1fuYfs2xQDb1kXFYk",
  "key11": "4zFbURAxyo272AuLVaUwGbZxt2EsuTnmRo1iFCA6XJhSyVmeMaP9KCYCgiVCAYHkFVjxYUJRkCcXWNt2AGeyRhDi",
  "key12": "3yGJoM4pWfmZnMELGKE33X6FrTEZxrQXYcsXjGJRVpsriU2VQk4W7BawL7V1nshhAexyi36VWhmQDtRThHjSRUDd",
  "key13": "25SsfrKPCsFr29JDqcSTgFcP2q6h7caSCVVxf7wLuBEA4CPjGU1PuDVxHNbviQnv9Z2dJaZ5tDApf6yW3rZELjom",
  "key14": "2nTABzEDSt4VVmbbwoxqkeDcr3hRsiGiBfMjW31scarXyna7BByoKHMuaQomaLzRxGzLVVCreJGwquLncFQwFL8n",
  "key15": "2DdBQLx7y1r7FvyYMQEVLio9hMv66uTmFcngfs1cxRrhYuRU4U2jRGxDB5be5Kjkmn7nU6uX5Ba1FyEg9wPMjxPk",
  "key16": "2Dsex7oo7w6rWEoQERdNc2g4XCRN963Jit9bzmUS48YvWMAYGvtNAfsfzRXPmLR34f7oRpnikMBHSph4ujGcCY94",
  "key17": "4xDNnKGt1GJQJVFgVWwbirWpkGkx7X8xSknrT21dA7DMDozvjCfMzP77KpafFzRtnQidxdATG1cXm6MkKf4VxviZ",
  "key18": "61j66Mu9Sk2RVCh9PyfTGHe4yoXNTMH2fnMFNY8UNxwAhR6rAjAhGeAAhPVdSc1q6NTvBygArPzRpJ6Ean8dwfiv",
  "key19": "4J1DfNeGsU4dzmhzvyosc36mcfD1XriYF4PawrcK1Jzn1aGNofzFyrss297mzDCLULnVQk8dyQXxju5AG55ifCjg",
  "key20": "n4JjkUcdGuYQasmzs69jVF3yUFCyuXxSGK8YTq4DhyyuhqQ4K3D57jfHYcAndyoxgwy7op8fK9YTdTLZ1QhXnAy",
  "key21": "3e4CyLQ51nfRC99EFaBLiHmyc4qojLtgzzJfpR9W6EBtEtoTt5NxsAEPVHWs2j6bFA4BMTjrvUi5CZVZEh8cjdoe",
  "key22": "4qJU3svbYCa5BFV2z5Tm4EgGkqVhEXUr6P2Hf78hD4byUGm3fVFpa7Bp98Mca19r5oD4YG5QDsfEDF56UcFC6csz",
  "key23": "2csEPwVXsbnLLBRqoRsGwVoTB7yWu3mqsF97GnVuR4c3bQNzpLJJFbQf6rvpcYyjsXoscVyfNtVg7uNLTJEC6oc7",
  "key24": "27W59egMKyGs1sntQYMLAhJ9nj91qbhCU1KyjZseXGDQFYrmriH6QSmBD8jH2aZ8W8s7zLcdDqQejqG7k4fUSs1f",
  "key25": "2NPS86g7zTgivnquDr7b4hnd45je8LvfvMmThiwiCBhhq4ApJy8m6VsqoBmZ7kcStkPTnfgMjmkMGrsfnGgPiEku",
  "key26": "CeVe5y5Uq45nQGCJ9fecaun45c8Ger8YZVHeVENTN3o8xzXmptC8txngFyw3XEaaaVqn3kjHq9x9Pn3q9ocgoa6"
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
