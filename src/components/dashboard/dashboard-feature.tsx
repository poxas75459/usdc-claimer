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
    "aNgQKc2Kmsqghwxk8H9y7BZfBNFqfF5NnqZY9sM2y7reg422tUWCcxFLyrqyKGVaYiPoFFyubcdpyTAXjPcV6fg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4APKQTjgjg6gQkuQTZoFNN7BQHabeBjRjV2CYa9tyYUGHRi5Be2EpXdhLkVmSeK87ZwponwPpWF4r71ztpPZA38U",
  "key1": "5ZV3tWVNTdQ2BS2ktWsEt7EjQFkHCnqJEcrp5rCqUMnTFAu6ydWWzCbFRKy7ce1RmgjAFxhp5JaLWWMTjSYXnDfq",
  "key2": "2ZiKXJihxL5G3mqwX85RmrweEf4f2qXXqXZDeLQDyi92chFx9VERKoRAMv1yg6w7qEyAbLKUHoNm6DBYsatmR98g",
  "key3": "5JUACu4nxV35aMW9imAGLh2Buhs2YgBK579NabZzWP1kQChqwPA4kJtq7UjDT1kBhCNPpCqHnEWo1NUw2GPwuuzf",
  "key4": "5RQp3hfpG9xdB2LLrsiCsvcDRwaGsT9EtNWHXUrgSSMzg3qmP7Q1fyZr7Zf5Q9s1JEULZy415zqcWYzJ33wjGGVG",
  "key5": "Y9Z8zYpJHCfdWQckZ82Vv9wX2u3XYYvS96JCWJKbEayJoFQrXyvRYkrnxpXPJYG6QSdispPzK8Vp1xVjmckcBpD",
  "key6": "3EKgswCakASFTuWVA14h7bqfx8bDbMGr9zC2ti58Nu3p7qXXQNax5nThYYhj5xxn3JZRKci6qHpocBGNK1rfbF7o",
  "key7": "3HaSB4jumQoZaU5fwbbQ5Ugg8RX1KPYCyGoJTx1h2R4tEKXbJywbr4sJwWjpforYFRg4jr4RsjvbUL1z35QVukR2",
  "key8": "3LqMsZ7DY4YYAi5wn9p1Xa5DRxZifjMGa8t11QmbSkXTqLPx3HhTjmB6kQszsixsM55NUpNgV2YVeUEuD13tz8iV",
  "key9": "5sr7ANtHYDBLhc4DqCcyt8yiUWGXb7hvzksWZhZ8Xci6gnaxD9xGkoQPXqbAGaMDGR4TAH3FiVeQt9Fam8HtRNVK",
  "key10": "m2AHYhe7xujywEGHPFiikUtbBH5RHtrpy3RqtsUXt75teh9GFsmxcetrJ3Darmaj7Tko2RqQv8BHEExmGBUvyeY",
  "key11": "4ctUdeoy2TkVzdsGrhSSbiFte9bDF1krMQk2oeD2z3BXoAGKEzHxJmC2ZpmWEijRXbovzcNQXBGvPiTtaaYKDh5w",
  "key12": "JgiqcCHuNTTCtMSUBqTUR46kN68Hw9ukhrmUuCz5hLqqFEGuYiWX9nB64LJptrZ6EDCmFSg5ZZADFWZt27a5mDs",
  "key13": "RXERpHuY92r42ZkE94LSrBR5CSyXicvetVMdZkRzR6MTwMhy8dDbPvnPEipFwejDP386JX4jMdrTRBBFLQMZEsV",
  "key14": "2FQpdTbWDC1Su9scWoFG72esrXsBmiazrYv2D2FspDVKM263jn6yPzryCnPq3FB3b3P8uVUokkK7qgczCRtndjDd",
  "key15": "4GvwPLsQC3XLCUCCEsCXNrcYLzeoHZANhrW2SbVWoy6rE8nggy8MZV5pwJbz7HgcPtamqtdMxSvdqQW67tDBAtMX",
  "key16": "5wxxpxuhCt3dNrPfSSgLmAVHCVZQwKaMmjv8LEskYD6CeBpqVYUP5sXYQaeuB9AzMfMwn79XbR5WZXsyYHr9Y417",
  "key17": "3ELKUx1sWJffdwXMmQTPUk5UFkCrib5GP1jCjDvGwaV95LVCwixn5V4hYQe1SJ2Gj3Hkrfxfuv1H1PrfuD1cZQ98",
  "key18": "3NY2je5p1FYvL2rzXBexhxZvLY6YnWNQQ6VG69iBZzBLFuYBSywMMX5wh7aAHHDtKPvExSWse4RMJn6UdvcZivsF",
  "key19": "3HWMK1f22xJn8PvZSKooARKDDp7y7JFZJvXJb1Ez4Kge58Q1LL7w61Lrmt4yLEwd67DtGnXva9DsPPNkw6KmzfJ",
  "key20": "5s5d3aKiarHPCAxPabxnoFcwRswaoopzd5KuMRm5ZmSJonsK91ngYiMj4cP8ECDYKBF3iRPDZeqrvhUh5yFpRVmp",
  "key21": "ksQrgYq6qRmQ6kdA66nPjNBAepmXYWAFtBbr1EDcfixYbxj9Rs8Uf9P5sZLJxbMwLjcx4qWnU31Tci3RVu4mQUG",
  "key22": "4fzQqyNk5u1CTppMKeHipLewbavLSN5PYg2rviQttJ4a2S93rmZpH3fEzGmeCHAEkdhLiYkX8K3gCwwnL2PF6uXT",
  "key23": "24wQoK9jbTCrLt3jKRCRC5j2ywDZXNEpDj2WTFHYb8ZnFdnceNHPCcpwNaFdGFWK3ARgz9gcfg82gZPneMe5rfkS",
  "key24": "RzVJaWChRcG4ATJdbGVvkxoycy92y9r5HmJEzaEkWWmauhqbWfTiJUyv1tvxtsbmJtUeHFQ2QUCuziPJQg1SLUk",
  "key25": "U23wk9kS9JYpPdYpHkxADE6CxTeY9fW9mMGniTsbsYNmHzPULN1WcuYUNEYDtWGfhjxqs65TKza7LdwqDjXCtTx",
  "key26": "2fZAqYp5tpY2atBHzryhBgmHZ3xWn1xkqfaJ13Nd7VxjnpZei4C9k3jxbf1QVHzwggxeUW6iLT21chwEtuzH1aWL",
  "key27": "4vDjPqfc2VkdSDH9ivQrkkywgN3ndPeyottcv7iwdm42aPzAxKo5FVPQLsh3zucPxSetDcocgRN6iLb7SnHSE629",
  "key28": "2QXYfYnK4VQxJzRzDR4j264Yw3Sf2CW8ZRaXLAoUxeq1yMhGrbfLvXW3PzFbWekFJGxxXe8N9gmrjtXKBfGvy7VH",
  "key29": "5hFcU7jhKqyDffK9p94tdoFZReE3s1WwHKBYgwdqnrXJsTKfXkDA731MnqVPLrwbFcQoLFU1XmNkMdUKc15p1BCJ",
  "key30": "2YzAzEkiybBhdzssrAoVKhbwVcuKURB6wMHRNpiELcdhC6wsdULPNguymGyMsjLtVRV1LZkdo2WVnHYcgBkJH1Z1",
  "key31": "5o4zqWH8qg63GTGjr74gvvc21TpAgSQdFAf42T24uMaX9swxeBQ9Udh3QP2VLMNU4UuibvcagEQeXkXwdSFyeArC",
  "key32": "58Pg8zP5S7dAyXcaSKUuvtwjQdQVH1wTB4CJuVVNDVRZAmwTewBMUipTVnJBLnVj1s76s7X3wdPcFU4HfsbTB7qb",
  "key33": "5TGxQg6oTg41QvQhMyH88Cb7G4ZvVGX7kprya3FDBYDXHwVCzjoSArjiTxQqPwJpJLAmh8iyViqxk4gKVMkgdTRJ",
  "key34": "3u7rvwwdU7zuVqVSxj81CEPV1RhqXBJ8REFSyDvQFrqXAhWckCwfanSYZqsnUCYUeza1bhSdPUZs5vLxXzY8C3eH"
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
