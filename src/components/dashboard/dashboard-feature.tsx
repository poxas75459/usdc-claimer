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
    "5C8uHGptvXw5Bd7p69K3bceJ278TjTTHV34WKSMubt77a4WB9Z33F7xuYUKQAkd6y9BBGmRPLBXW5GjEphY5GHwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Xuj3Pt8uBuWiUuM3PAQu6U7wUYQJ1LeHE8UVyBUJDCSjXxcFJcccDSSR9GbxJ9uspfQ3kSfdytSBQX4WY94hgzi",
  "key1": "3tjAEMEbD4Fj9PTz6bN6aUMBJWymLdQtxbp1EwpFCBS198f6sAhA6wYSMPmwiHt5VJLLFNMMHmWyoJYMbhx9ptRX",
  "key2": "hTdtHYK2KV8nEc7QgTf51P2QURTeVhguJwE8C3APQacpNQ18FuLzENJyf1vABDzampGUJDXZWZsZYVUE3c7HW1G",
  "key3": "3QtW3NXdtCkxKx6UNu1foa1wDdAShpZJWjACAkiWTmsAEcCRAFx9uj6po7eMLwQyTtprHFMncwgUkSBqzVuLWKFD",
  "key4": "sCtHCdodNEznPUKGe9fYrwJ5mHdg6doKJnHzb8nXrXkXNamBHAgcTU1YhyTnyw4pUgW1bSEp6272ra9k2keJHCV",
  "key5": "3yWcnsCwKdetoxAtquqNqxNXPNahqdKjYqyuRScntZHpXPHTFRdz3xmGZm3M9PeVNhEBgazixzEtPHPadk5dLDqL",
  "key6": "Vhx5X2jtZKnx2hbATtDKw9YafHyxFTnTQRGatN2NEqkWweKtc4zEnxVD4ZErHgAwqoKvpvki6QD3YasDzrnDRrf",
  "key7": "3SjLeJ7y2daDC9CTUJyDaQKeCDkJNULvhGGNtv7grdEwgbztKckiN1vhdiXx1ZMPBPgK2692q8XhByHSdFKX122T",
  "key8": "5RdMFhbdsB842kxqbHQRTE6bmQTvNH5n3SVfUD9ct13WbeTEK37ghZRu6tL8ibiRTsNqazcyJh5TSkwUg9pPX12e",
  "key9": "uTQbLYo529Tf4cy3DVprGoFxSHH3xP5yurPnUVLCtyEzkab6ZuBX3M52onhJKR6ZHk7LTQLFxzhUQYoL9K3E1Zi",
  "key10": "4VycjuAmj6HpB5ayAcHgfmWrBYftBc1VmprMkjzYQEgwH1F6b9dtGDxYFgduXtKfvJRHiUxD4j3JkA5tcrHxGkX8",
  "key11": "2Wft7FnRmgybdg7vXLs8RdLdx8EXSJoZp97LVYZLW1x2BHRWpAnfEJQcVNWvkEUnJc448a8kPeSp97HDJ9oTSacu",
  "key12": "4QDsjGV1YU4BY7c6azY8mpWWLNrJ8vWpHab9kPkCYarVWQqCpKnTkpB6xaaiqy2AAJatWv8GGjfoFjGQFXyXLXLx",
  "key13": "3Mn7VuBWHzfKLoquLp2z3HF6FNmzh4V7FU2v25UMHDgaRJ21art1ogCn4nZd8AHjRnVRkwZoPRFyDwynf9yWdr2y",
  "key14": "RDBdkco5YHLomczqwCXuApZfHqqVFtpLMHE4FZgPWkqBtGhesPzJzguPX7evt8XQUYsk8GsspzKruuDgz4w7n4d",
  "key15": "3soxEHUUDTekx79LPAVu38Dyz7NsAEndhQSLwc4mvox7QxH8vaB5kJjxs2QqgGZy71LxWzGfX8fm4cQir48tRcba",
  "key16": "3KWvMuRqK5oTHbS4y76N5JB4fmkjTZE5DsE3Ub5hwfMADmEGnF3nLntx8xGvUvt9Hqtx1gbWBvTMSv2e77WG2Yig",
  "key17": "2rccyShccHn94nuWb4SWS8VcNpJG1PN3oLeT1X2PPEq7Mjdo7MXj7wcrGhRqcfivurM6c23wutaU9QGNuqAEQW2t",
  "key18": "AJrkSe2eDyHfDZdV2mHX7tMLuSz5tGGYBmr9pciK9pfxvSBDmfx8Vbdv6DfN43sqdZ7zAXhYvcVXN212L3JoU1F",
  "key19": "5eqxCKEXg5ASgVhWvizGdFzLNTWyrq7db7u1FWKQihW9aFTqKwK8acewnJU7pEs8gQU9iJ1UKizwVfxS32a8zvqT",
  "key20": "65UfhKi2dCGYDBzG7wwAhjWa7RpBJxtfWKLPpMxX7vDRAzrxCuYBWzpWRAsfNT5qnMACNxCmGJjPUYLb1rBWxqVA",
  "key21": "3gNsTnRkNRmQN65oJvxy3zFt9E2vZAAFk6fPL1ozZuAVwnUVBVqDaxj2godMxpotwz6m7ogjCNKQnYvKJAYZW1qy",
  "key22": "38MGGLvK7XQigwTyy6duNokHNvuhZcxuuDqXK8CyXbzHdeWtyAzc7JfDrm6DN93acubXxZZ7UVX66EBvshCsWzuu",
  "key23": "555h3a5rExMcEKMVTzaE8nt5o7NRj1zSHyewGeADUn44mgLPHwwr7YuUR5Gu62y58gwQhY2a144ZiH5WZsAwwoFB",
  "key24": "3BUnhRn9Z9peDXApV6DN7SFPxftK9ii2Hz148APGA8SSgLZPPEwgtsCoE2dBBkontLKt9EgXaPtrdDEh8i8D1AgU",
  "key25": "56ADYo39iqpRDUPgJkqgTRdfxoWXmNdf27d1BNRfTjUScsuqKNNTdQnVMfBXmHN9hPyokdoNvDFipoRePkQnGREP",
  "key26": "32zNq7KLqoM3pVhjBuffqSPer91wzi4wCvhvRWYXjm4CqXfmAedvMWCbbpqKHGHLceNqMe2c7QfKzB3Laux9AgRk",
  "key27": "4yE3CCmQF661eLi2DdvRkejUbiQQwbivFE9eTc4x4Zu4rUUbjAqtM342nEL3sRadeeb7LfHbqKvXMsgRFQpYyfgs",
  "key28": "2gBPvDyac4FTTZxrZVmCaAueAeud9ir4o2PRcp4uzACjfCqFLXh3GoTkdZbe9GehncMsbyNAJZhbHybejaX7hwq5",
  "key29": "2ynpFu1EeMfKcKtkFtcFsZy5EaFQZsWV8gzzHBEWZVRF74DvuicHP9Uxm1ME7uhKVoDZq8MBFP8v5nQw8WX2hLtg",
  "key30": "3uesS6gwg3NS3goaDcUininBq59KeD82GKr733WiQbxU9g4P5uJyT1KCHngDkbwr5nCJvoSMrdPpepY6nvDBVSv3"
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
