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
    "4X3tX8CjasyXD6vCfxnZmD43oHUYzdsguCBTtiwErWUdTTAKS1ErqgaNzruhN5X6zJQ3Fz6jmZz3hyp3Br5N3J48"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mVL9vt5eUsfsz14QLHJULhK6oNVnJUc3Tb4tiWRHPE1mt5GpoHocx3PskncVZZRxutciHoVzXArx49tf6ktyLBs",
  "key1": "3vmCWShcVU7x7bF7m4qHUyAVCAex287LoiKnBPNKvnZfSxnAcUyZqqU6EPuidSArY1Q4jk93vRJgLbCD5FP52fJJ",
  "key2": "453Qym7RxAteLigX1gv6AkTm32T3oV91nHMU1TmDaGT7CXoqBs5DHatgxF5tySCLMbRxHqsXBJF2GqrfwCkaLXYH",
  "key3": "44swnxstGm96SMYm1RnpR2M7368xA4hqJcHnnS2mNvcbZBm7UdCbEe3UKeSmu3Kc3SYtcppH7kKZqsqfaVEjj5tC",
  "key4": "5zzcg8HvuEidcFoSxpNn1BxwcoCsjQ3vUG3ZWctVnsUgM3g1978Yb5epYAQW1fYTZYT5afkHJSa7wyVEW4pN7mVt",
  "key5": "2PjgXTc9XGpiZqHW9mvTC8SGq9z7FhGhC5TfeyALpJZFbpv1hgRn8dHpKR7WzvYALN9yhrpLygBqY1FY5PT38dp3",
  "key6": "3TqhpMXdsaH4paoHuLazPv4rh1B4dEzoW7MDpSUVZM5j4vu6TBMZ19FaMgknyiQFSaJVFXG6ocx4ghxNjnwbLvbU",
  "key7": "f1AofDoXKQC1HyXZ884hWMWppR9PvtDZRvAXzav5AE5y9L3MSEXp7jZim3Wr26b5xvbvGWeBxtPNfTyhwzDVMko",
  "key8": "2gPMDMCKYb8tGSskTzqnb4b2E3UDcHHZEMTrXp52W5jQne4d6oGfLDA7jqGURdmX21pJwrD4q947TbQUot2cq51V",
  "key9": "3UXYESa78yJ52MMWF2xHE6CH4z7tQK1WRrgQF1aNZyNt8jacSGrYaqbFEVYpsHVJQMJ29waQHTfmpEDE6HcYJnaj",
  "key10": "5wvTuYqFupcbPVxthh5i1eN9ujb4PQvb7pHSGUTLHdsxeW7vdd9VdfgAibbNnmXY2P4AtvnNE6sUfGZ5JMAc56A7",
  "key11": "LehVjchicbbSEp4C7fbAAqgr9G2NiRsquE775TMHT4mgUjx7DZj8jPN9CBtcigzboEwCkEDbLT2GgsvH5LomLHN",
  "key12": "N6LTXRHa6xgzQcXoSR81tGaoHuLwqjEz7Vfd9CheeDwwT5VwD98Ufrh1SvMbupK2rUwsMWCTqXQB5sWro7zeTed",
  "key13": "H2VcKBwvQaYkoGmkjEcc4sWQxAWT5CVJX2gvyx91WWmjq6p5RjBW1FMdAXq3ueqBDnnB4E4j4eM6hoqboUXg7Kq",
  "key14": "5ZSzrGWLkchk1oXnkkNSUbkVaV47z5UMDmoG9BAgDdnLMfXu8VdZveJSNhgyifSbzZ7ZAShpyG6NaYWbdx1WryzP",
  "key15": "4fNwzCfdkqxUguCTwVacKXFZboYKykyttmVsPWZt1YqFiuVN9EdL1rmEJPf4xGrZ8v23Y342sK5KE9aYj9Q4rYSn",
  "key16": "57N4cFj1u5QCwSmvkq4EGJ8kcNcqQ3jdu34L219pWbMtPahrdkFdSYNCjDAETwTdt36QmHqwf9JV73UBXedCf8ye",
  "key17": "5waSjNNw5hvG8iLuuhFG2NzJ42VqxbzVf9j8ET2wUDHuKJBWUBhA69yzxbJiKwQf76qtM3MkzPBBC47qZ7fDWF8o",
  "key18": "6474ehrKc5XWoA1iLd3kijvdvqeNL8AjNxv1rw4miMeiQPEm81u2RyFQJccbKYZvNUu47CSRduH1bXNYDSJCnBjq",
  "key19": "2LwFhwEtGEzGmp9q7CcB8qqMjzSAbF5Gaq7jb57rcCDtDB48WundZsUBXmS3xQzhUbt4rvocqk6PUdhg81wRBCou",
  "key20": "5nRcDLYnajKNgSRPrkp4yUEm6Pms1esgfZQ5wPEe27h53pxVF7EJ3w6sh9iZCXm3j4aYw9iLmzqYYLct2svDYGAx",
  "key21": "5zHRFSUNR54Ze3QRaTEuNipMD5GnjhagBcuzghqeMsENyF2d4nqMZUMoJ7oVq1V4WWZCrg37x7Sc1mkFYYF8aBoK",
  "key22": "mkcTm1xmJL2BCtLCfzuATgrv7y6zKNv56cV1XGxwGX9eqqar1bYPuMCmGUq4dt5Cra61Zx6xwcVre6HfS6dX6Jt",
  "key23": "2pPG15RBmjXMxXq2KyJzKxKKt71D1nuJjL9k9CpLBTDBss27MCrmMRbzvVsc1kmMHWx4GhZ8TKH4Wn8owEmK5hvq",
  "key24": "4FBxbZ65HJcYvuWyAdnXnKLy8T5WuaqhY2RxBjzQNpxCkusunP7cqbGqPjApFXD746eQLf49NUMHPtd3j2aSpZbv",
  "key25": "4bybGtRGREUjhfDm1rVWc36XEvCLYYnN3x4U3YsPRFr158spez3EuoAjMPhkrmEwqtSSz899KX4CQ3BnjF1ibqwR",
  "key26": "SiMAiR8UuBzZShjyvTJAeEA1Ahi1FoHX3hNZuhcuiM96tXA4Abc2HEswxo7e7SHAykNJ5LzXDUSu7XeBrkejFkG",
  "key27": "4W6TqXKJhdkVG23dCyvtNCof2jGXyMdHdkdPVAL9Dq4QTxVMvRaT4aMNtezQc77zf9fCrSf9Ex9awx8Us2uRPeE7",
  "key28": "5QYukKcEwtCzSPUtgTVth6EBompcaSXoQnMcmUkarN4CJ7eFS5E7asfEx3z6qKiuFQS1MgMYrNtXUhrBtcjNimGW",
  "key29": "3Ta3DaFakEz8xEvpFTD9MW76CCGiUMqLtEmo74kwnSiLYfsovcze8fEVq9sT2zXU4Ppo3jX5Gqb4PjdMn19W6XAk",
  "key30": "3gordB9T1fm11Bjk2ykijcPqW6FtfaosWedJMTPocZcpNHui9Fp2wAqRhCzgatmibARQAiyjXurJcZAQXFDHRGKh",
  "key31": "8Z88jcUtZXQYf3pJEXZxwJ1hp5LWdueXwKbgmKyJS2b7Wm34kih4eDewf9gXMgc8KhJUgfnzueVrNcUHTE74Wqi",
  "key32": "3i883qCbz7pvb7bvMtbt5ozfURWRYyoesvdxngdRXH44mpe1acsjxr6KUp5MuBfHpNo2VyfHiKmZBGbJnv35Jrmi",
  "key33": "5kEb2WcaxyP9Jxi65DF9QUH6VZQWzhbVfE5DoJnftv31quapErBVJYgreT5XSGgxCn69CtZcfAM96edfm1BBtTre",
  "key34": "YDWkKUN25movQUu6dXYbnjNA42UC7syT3cMbMpNqL4evm2TPnWFdwSWjU3mbELgtULPxcNm17KYHeyxQAmpkwWx",
  "key35": "4dtaq27hjPDWYH3NG29AmQ1nphx24U8L2nrF9XJiKc149kD3iUH22hh93neKhyYa6wVZ4C8J5dmSs3gdEEMYPhZJ"
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
