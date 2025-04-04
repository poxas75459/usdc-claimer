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
    "JEtL3S21LfKMqvTZ9iwjEmnYwuBNyv3g6u9hLNat9dkP4gJt7CoLz3ByN9s7jWHteymoia2UgRqUyEqDvGBFX9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2meMdjEhQVd7merVEajkopJX9RX99eLM4n47WgW9CDiMtL1m3VrCUNTUaq15vWjPkhQqEPuCCBC4dnwTEsav6iGH",
  "key1": "39Mhtjc5guqSkJceoaQSo4S6dSiPB6kiQK6tSqQGhXQnhWE8AjWLCYxvEFnv9CT89sqw6Mj4xeoEYCLQsFBswFEE",
  "key2": "vpgca8DKTLRCrRsXLmfREX9BKAyosZ6R2s2wHqtf7x539zTP2Z2FQPhWwLUKcbwzUCZm68V124acpnvyCk9c7JP",
  "key3": "vT5dbeEhVCGUGdUitU34r4hSHF6v5CyKHEfk9T1N7KDYzBVw72hMe8poAMkfhKxfXEuTpzmSWpebWPj2QCionXJ",
  "key4": "63XxEvmwjWR8x4cZw9ZW4zp51BTBB1PD4Mqz7JLQSMhPEtsyJjkDSbjKF4pQ6gA9fvUBrViVvoaYq9kxdoUosR4E",
  "key5": "U7FW6UUxhToP6NRKc6xH6oXp2MqNYCL7jJLdsVxMKc6UeQsLstV1NYrXFfkYxcyZyvYy63aJtz7zJfTW95HHowk",
  "key6": "NiepZBXWGoQDWrpHKDU6YSe1AwZM7krZkA1XpXcEBcR8iFgtD6fEiSggKizxmLYBP82652EWnd35Q71h8mZnvyF",
  "key7": "3CvRHjco47NtFG8ppWFxAxJLXs9uZcodCiMSagshVR6dQpHnhzibnLzyB9nv62KHQytSC6Etsj6crGVyw6UH3fLu",
  "key8": "5t1du4Jp7tJyEZLXoeEp2fH6h4mKuTGnbAjDMzbEc49zmzEBib4UUupgiTXMT3eCeYkyWpy9jTiCNNfP1bvKDZy8",
  "key9": "3T8aosPotr6W7a3z6mRkNHeTmfYqktfbW2kgadovDMAM5xsHmnvqA3WML3Zwo5UaRRjjmFbpNrL2rtS1tZdM9eM9",
  "key10": "3oSEYB5LwBUnV5oXKBdj8UN8vUMzSzCFfZoxDnZW9temTXGr7U5QpfBXK2dJVzSapyCfcoGeb6Zx5V5JmTv4z1Eu",
  "key11": "49ZTuLiHRiErTfL8WsLdgsC8BCQY26boby2TdGqK6VWLx7EtmrTf8uZ1mBYCV1ntL7uP7XVVcbjPsnVqbuwhYnAS",
  "key12": "4BaMMCCCKPrAJSZv95TmwFku88xLZnecGdVMe1nffrzBcETCbcbCvTgq8i39VbR35sXCF1tirZCc2Uvf6z6JMDV6",
  "key13": "3xi5X4a3dN48fhvkQsZ2APcv3uJmpqdRHPorGZBK3qhfXih7s2vQku4PaX1HtmAVthbsSqUcsDienACRD9D16XYa",
  "key14": "56BAFaybbsci2FixcvpkxjPxGPmpw2p4aB61ug8cMS2EhnovPKnif4DaXCoRhePWFXemtCxekqtKgtrBKiVGnu4F",
  "key15": "4BFi1mtcosmFSjp1aTtxvA8LjyPfAQ2LqnLTHt3ZxGZj29ZB2AHdED2LAGXhPcZkF1NPcUoFnvz38LUoB4ok94fw",
  "key16": "2PxziW1sNqALnHWFUAA4kxHPqgvQEjKWv1dURuww2BWyJo1SpstkW33MVUVAAXPqZdE5tncitWao8KkuD1bHVVs1",
  "key17": "RyNzLFB8FZTW18B5rVcQLLL6ZYN8Ck5tDVtttz2UXLFhrRk3C91UpWWG73kR1Sts3CxhYztisrnZThTpz4kpUxx",
  "key18": "4wc5gffWzNBa5yZfkPZ6o23WBKS4jTUS1QrvUbJ99cJEhPwQd4PjC7gatt7fQ2cRjqopNBCns18tggLSg2puZdvm",
  "key19": "Rt4GZfvoSGGZYqUU11P5SGgMGWtRWz6dbQfUjVfUPozDx3bctCzfM7Lt6pbaWgfUmbZP7RC5Expm3C5cKur8ToY",
  "key20": "3ukcgW1HL3kA2FsvPd39DKmUPftcUCLNiKUrEX4QUrLS4sgxcYGXojfsqBA5poCKqmpadSA69pUnT8SuF6z6xBtG",
  "key21": "5NMbTQUg35NVN5uB7RxVNvSCsvDB65wFJnMoGfVXmgy6LMb7qy9VLrNRrG72u9C8USZHwE7P1A9pqiMsYS3AaDGV",
  "key22": "57VwE8US5hg8qfYQF893tbEaU96L6ANMU9wLZzUA8owL1c88gFzqyU6c7LJFL3sY9z9hXVtRGcqZp6JBoDyh4skd",
  "key23": "HMQUsnRNFcKPcnxvTmc3uDVRkgFuL92TAzdHaxrocPgtAs65yntYmB7wz6q2aqG7PEMR1Cr32yipCeuFjuyxuSu",
  "key24": "5Ni9XWEmPogXN8vDhewCiKuJ6hoWBMBJmcyXZHhsv9XAaBT337QRzEstfciGaqWUY6zZGqR4uGP68J1eyqa2EFB9",
  "key25": "2V4LbNkHqRdpbgQHYZw7or7iYxhDgv9nZeF21DM4ALfN8861gHR7zbLv3p3ESV2JkFiPAczG4tsz4coDsn42VCQo",
  "key26": "4zehVQzkg8yCQCzWZbYqqJJWqpDeL7FS3jEr8WGd6vAbmRoXyL6q5yvwqqHMBgsUSyRVJKoYsJqpeC25SgSZ1Yuq",
  "key27": "4BZrjVGGkZDzZJwdnzUSnhhAR7rw8kvqSUMARsujwrmVqo1G8HNznMzoaePWJUBJzYU4LD1Xm4ycHhj4fKvxpRDi",
  "key28": "3odP87F8tvTD27S1xL3CXLLVfS87H96ZQntLwSusjDnBXUSnfHyx947vaAefVoB36Eze268yF8y1fZpGYTkoupxK",
  "key29": "cbKH6Z4dtyr11jEcXCMMoVmVUQCXbtCaUAbGHdqCGvgpjw2TgCZxWoiddpckV6bSnqPDHy4vBTyCc8PMGerxBWG",
  "key30": "2ZrCaNS6YH4C25oVBAgdBq8XNAh6DHtjA1tJwTegvLQndigK4dzSKD2V2ZVeYxWtp3W3rig5LsgD1zdMNL281tiB",
  "key31": "GimujGBzsjwhscdB8ZVqmKhoyj6ykg98b4ZGhzzHK6E2toT7CjU2jiixXEcAEwnJzG7M4FACdNgEuBXd1aTpEh3",
  "key32": "38tBmoZYoEBEQ2rjgrvQy16JAws9CaqK2xvUCBkRVtWBspc3Ur5KYttfND5Ux2XH6qZsLGM9xtaHzKPNuUmeoo6q",
  "key33": "3H7riUVEQzzkQbj6WJjAVRLoz7nndbhN5Tn83Ct3H7Qx6i1W1mhnk72zkGVwBHqaQEdDsgoyndS3RuGAyWeWhyzN",
  "key34": "4uwZyGQes7BkCA4vzhtoQHyAW1S6iW68gZMQVQHadrkV4LyMyPwGaC8z4q1osgbwsddQ7sJEagwcmKPPDcg8SVf2",
  "key35": "vCXHX3opmTZJKjNdkUF91DPJxqXvYXaAH1vxfBwyFfTJx75SsdQu7UGLg84snJEd2ju5kQBa7BdDovzXGQ6UMau",
  "key36": "5nPysJmJ9GHb8fmKdfgm5GxEDmQzvnaMfrYiVJjSzozXwTsvfXhHPeqvevn8CSSUfM1gJAa7vbjdBkTyVQnfDMjn",
  "key37": "5z5vkqnNkkUhmTbB4XvZDrbfdr7PpPGicckAt8TYcHEi7Qw13SFe2qtQeirFLRvspftmssBxT7AEHz6PQDTyS7tt",
  "key38": "2h2sz4GSjaF5YjouA7RdrXZ1p2JLaoj3ZgZJBpmdcKpxegYepQtbFiwJR4AREcdtv5bGK1THW9kq1XzojCySg49u",
  "key39": "tSDj1B3XvMHmUXNL9hmLk4xY6uGysSsFwcGA43LSCmmyEvDDfmij1f9mJidEKaEj3FK7djWkYunvaqKqVehV8xS",
  "key40": "4ideAM1Dj45gJdVAiFSXqwZKojyMmS4FLQMMcKP4DxpBYiVrUzLkqxKvfZzFMmf6YWrEXV6mdYwiEFRcmMNNK5Ek",
  "key41": "24TToSpBvPiPE8j7CunbGggt8KLzgUs5jj3uppVRd1gmSjYuLJ4JHZWtX1KibkW2mNvS68SB7oUaUANpTNjawR5U",
  "key42": "5weSPav7n6kGjJauaExqoCHnVYvAPeByus5W2Ps59KzThtEes6FbYaVjqiEXTf9w2Wzoxo5ntQoSzRKQRf3SWeMV",
  "key43": "3UTnzNrAQ4Dc2JG83Zp3KMftG9EnJ3uBgXTW7xEvjPvTT7mkTZCJ6nrsUJBD5txNmmznewENUSea34NrD9Gxdi7H",
  "key44": "4Q23z8urL314gqZwpydfd3sXDpCS7gaswJajw9n5grFVAxBResstC9KB5Y9mHhUA7h3Gxi8pvx4wnEWSbmRNf465",
  "key45": "2gXgHFLCqv4nvutW7JQEJeE9GRu5XLkkja34xkBc8veWfmPbLNoKsy2z7vJjUVphUgwMFcHLASBomFBAwoPxWMut"
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
