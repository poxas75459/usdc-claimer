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
    "mdkCZsWriGtfSWxK2EPHjNGGugY1sCf9ViPPcH5g3qCZ2hvg1VxpnfyW3o7XHQCVhz8XJAuTNxxGH1dg62sXvsB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qQydDYdPk1GuTkJufqscTG745m57T3q484WJkLPV1Y92ErhhuEp728SC2epdvvtWmz2DUnqTD34de8g7ZCxKL6p",
  "key1": "4Gp25tdMxc8U69cBeY9uwqEyHDH9iUrMj7nWKYzqUtPqwt4DJTCQzh3fTGr9FjWp3aFuCpGAL35HUqjS77ux625J",
  "key2": "3RQCTGRN6efhsApBdwN1YCrhL2X8K9Pus999ouZbLj1oX34HuAvznDvG57NAhibJjckzwCrEK2QdGH2HgvQzM4zD",
  "key3": "3Cy4maYMcCn3UcWMNQuMR9DR4Cb69LW5884fNbmguEQUkNVn1ZSpU9SqDV5QR9dTyYnjDCt8iDofpteVUnRR4iVp",
  "key4": "3a6pEG2JNGKXXrL81USjUkHnt6qaacPYAZhbS8uoHpLzVZydGoXb29RigTCLMowQpbL2iakZ7ogJMr4dF2gEd9HH",
  "key5": "2bdaVT6jTqCFGtJsPJinUBojmA1aysKeZ3Bzy6SU7gJnbuz7gvVZhdPwkHS7gBo9ZT6V5Atk2Xdji228TchUDmYm",
  "key6": "3kMWsVSwzVjtP9netupD1nPkYPW21n8ScoQKDAZjw4B9BXPWGdPe1qdAGhqKx8Q7PhyZhW1XVq1pinvccZcbmpGr",
  "key7": "49JRMVUCKD7bj8N4iCNHj5LJZgdi1YKYzqBoEkEAVvXNxUSbvyHXPbmETFnzgnosamX9EFFSpGoSemCvpXy68P8Y",
  "key8": "b2cgP6bch4LxCcukc6gpTGeqb7NbvFgDsCt4XEeSREogo7xCq41jafebGxsFeJ2CNKdZjHuKMhrxDPYUjbsVE15",
  "key9": "893UTFSWqjjHGsbxvyVh3U7yCmPMJ9wa2ZCL7VBjCUQwvVTtYbgMhvCMk1XFXbpuxhuV4Eto31ni1SKAMSaq35d",
  "key10": "3jr1m2tYTy5pNKkJE8T9oyyPkD5KK9LU9CosTwGWL6o19GaZC21pwgoK9N384LvYCUN6Ek3TELePdDd7kkujbRus",
  "key11": "2jhxFNJxSU9d9hfsQq4FtsqaXx2PwipoqYG7tAF5o82oz3B4wxLakXmas2YsbQLvCMJJ4CoSwxbvWmedUy3LJ95F",
  "key12": "4uZXxuf2VHtzEUs7gAiswH35YHG6EVn3ZWxKaDnnqvRs7b4HhbJUcJu1EcpxiQ1Jsytn5DFBk42hnGh54fno5bMK",
  "key13": "3sSGr27yAst4NPMoJHAowX15unn8XwXNvAZGTbnjSyHuNNQE4L7icHfZAyQ8S89jGWqeHNXXd3xBv8DDf22CfwLY",
  "key14": "3jWEc6VwXEip7NSfCXs5JyfEdUrvdKyYo8Uey5qWpZ5dEbwfogyJHMZ6P3asLbxRRf8Q6HiLMmv5briwsr4cs76B",
  "key15": "22GmJPVCbEkrRUG3yssd2pzB97Xx5KAuN3TYFroMbaAHArebmA7rXAFNL7rEcKrbyTLY2CjwQiAzJvrpWXrfbq6h",
  "key16": "3sc3ADyJ5viBh5zyvhFB4akYss2PdYVDfTPFwjjUpCW9i2FHkYF3PMkn9PUzhU3qQ1ccUPCQ5TNKrNtaJCBu1ot8",
  "key17": "HGNRNKGmPSyWsF6gK27Jo5Kc4RqDnLBAcgzDMPfyuExSmkuFeTMUD4Kywi6PYkbRhHtdCjxviGXMmVsrMQWmjKD",
  "key18": "CgUEevWhBaMMuaidSnDWik4rfiWscCBU3dmnz34oj6wKSH8cENeV8EYZbZN4PmVjcsX1bSqxfTYaEFCbhNerRnC",
  "key19": "4E7oqLBJk9HEcFdzofv8XjS4rSuqfBBUFcjwkR8ybsVtiEB815W9MMrx2rpZcKahitdTPA8m8Pa3c2kucCF3vtaY",
  "key20": "3TMNVeC3T8xJAbgF8Kmo1CeHshLxt5hUc1mgosTk3yd6Q7z5xT2MEYYhCB6GLzSs6v83hVNM1SsKvSVFg8j2p6p5",
  "key21": "57wuirbpUMTrM7yrsAUmFdeejtuXz2wNvG5vEauxPiTAhJMB2wEjmiN9Li4h4fua76BY61T9tvKFzeHwSxtTmtsQ",
  "key22": "2BvPFTNYjYNgCCYjDhpkRjtcHWkfFsDJmoEvoJxubV6AVPMLLXdsf99HvQMNPfbQZFWkLgWJD5MxrXJh657q9YY7",
  "key23": "3c94X7hTxzSqifnfZdMEZQG1H8YQ1S4zTVAKbBmgV3m7FmAKiUW8gFqTCqRNtSoDbk6oyAApXZyC9gcarT191BYQ",
  "key24": "2YUA3Fic4sqEyuFJLyZ5GTvB9XCa3bs3AUQCwL9tet2V2oNfWEqiFCD4sZ4x1J1s35XZs2Xuauz2Unc546vZgktw",
  "key25": "4DUZSjwYw3dxE9JLQFroR4NBiMqTEovoEcuxnr3gufM2ziKDV8R9DLcgAKuFerBXuPu71TeWjmj2u6D7SC1Pmr3f",
  "key26": "12hz7VVbjWgZ1WExd2QSucXMp4AmsqvS86r7sbxXWvX7H6BGZs4cmAVC1zq3FERnXuN71b93W6c5SwX7Dxj1LfU",
  "key27": "4h4668ou9H8fhYp45QZGQUfmF1yKg9Evw6QLyUyZr8bnkYDVgG5BWvVozVA3156wjNzpUyrpmn2YQgecv7PNJDsb"
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
