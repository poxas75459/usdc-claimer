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
    "66eiACPfyrXPYceFJjpJ4hVjC9tWBgRB5F1KYW1rru9fu59ccDmT369LNvaHGDKhcouKkhAAigeEjxGw2eNcZSNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "558KDarj5nyyknwNxQjVdsq78A9rJCxfFMYqWRYQWqiUeFMTJ1YzKwMqsbXX6TkXYFMFH2Nafepx1ZWzPHna5mGr",
  "key1": "4ccN4vu1dxvde1oshvWv4T5AbTx2G33ru5bpWANLicPvMnapgLJdpH2LzPT3K7smf6HNXgakERt9XB6RkYNUoAHV",
  "key2": "2komXsuFsa8qyjGnNmGLxyFqV47v4XMLBQVKGtaYUifJ8aJgdmgd7xEtUCzaYfGStUaDtZy2SmXHU9hfnrvMB4r4",
  "key3": "4MpBCw6tyUJQ1KJvdZyquJsx7684kiNbuv7DERxtzhohZFmiGoobAK29mhNLnxAtXDBGthBhdWRPQH8sGE3tJzuw",
  "key4": "pstdMPPNwYK4VGQS71Jn88GADivUFi1v7qggvUxwnu79YyBozkpK5WixyaxMmqxnTEkSgCiAA9KXQShMiPwyo9Z",
  "key5": "4sDQH7g6AVha9MkvHmU5acNCfwkSEN2jirz7kFnnue3fx72afn2UggHhrwrRiFfTBH2gFQNRvmy6RiAkW83gPYQt",
  "key6": "2u9j7AyAtx1qoMAHKnrDkYiJ9JeEiiygw99mEp2Aqh6GeYLdHGFv8tVqqVivB1p7vbGhmvMuKrZEAMhSR6iyuKB1",
  "key7": "2dNsKAuUjgwgEhcGL6v94w3k2Ef8iEVQcKJhye4veVHTFy7mLTKzxXnrJCiDqTjQTtUtF8HgEKwncKYpAAA2kf1N",
  "key8": "62j2DE5cztcYRtzMyycxqWdZsaoCAGWPaDrZUcCiBZWBZABTzjMEqWpUKtfeCZ7oK8QF6Tcjg6z1Mjb2uaufV2vc",
  "key9": "2mDGCTkYyN6ewSRHYM3yYAzr1fKEsuKG7qxRYsXWz3eJLUaUUeg47YgEm3unveWKBaBrkjqrbhrAfAy7GFkH6PCr",
  "key10": "4qBNvwDW4cqmhkY1KoFjT3NENVjzYrErwaNDpYSuE4oBESwUvLzeHHoEqa5CHumsVCBGYZ3bBKn1UCs97DUnvjnw",
  "key11": "3GhpzFNALgQijW5KvXHxhmrdM36GVRkck3CVAfuXHwLpiZTcKWz8Nf3PpYymdw6UGdB5ANYAKF2gSm5HLEa8tHCG",
  "key12": "5KjjG1E9wTaiuwaziJRcPej45J4GvC56kmcgCGL3ENE7W8iySfXnY5HEJR95bdeL54J3CC4tKVvd78XwGRgkFSPH",
  "key13": "45qVPDUP7peA6c8FpsFz55UVB14UccV1LUCpgB6u6vbwbX5PF6RJiWWH7BgpCx4hJo87JYFruQs9uxBP7D3RvWan",
  "key14": "433TXf9YtH1RyzSnVDnvUQw2aPSUKDnkTVYg3DYtc7ZLBEiyS2qeP75V3fqF54mVNXVecnAhgRpty5qjz3uBbQ3x",
  "key15": "2u86MJYc2K9HWUpUhxmN8rQ8Lq6dpHy8PuTuoDGoawZ5MZhReDfQbA2bf3Nd4WaT9ZBt2CUj8nfmbuGgww88QUgx",
  "key16": "4CdZHXYxM7HQN34qc7dP8RW83K9xYkYDN3vz3akRk7UxgojvUiTzEiSWitM9USYyU8DJ9LTfTsNaKASs9ecmSMJG",
  "key17": "2Z7EUfz5KK74B8TdH2XWtWs4dvvgJrDU9AsrRt1yzQKpJHs6ePJF7RrUDeEtNJrjTJ5nkE2ZeZKb6WEzvD1iyKzF",
  "key18": "2vVbHQw6petHorbd1P6P9WZyizQxMD8jekBF5A7GjwX39EmYrYBEkc7Rh3J9d1ZEBFosWM1hcg1pcvBNK2DXqaix",
  "key19": "2Pqa4dAyUPBYmGCEnk2u2yLW4ZbMx2avaetiM64ombZNKN9ZVP2knmD5teTEpYgGEQnwgbjNrvAfon4RXdAhzgqh",
  "key20": "aHBR1Dapwu6ZZ3ohn4wcpSf2Uu1opWFqHCoauSAs4BBe3WwfqTNFsmbPvJ6F7J9gmgVkWNYMR965g8r6wqE2r1A",
  "key21": "5tWBNfGCcsnrKEfCBjaq7ey5gHkKj29uzsxevUThH9nsA17AkLaJNQaKpHFaeMUotmjuREsrQ7oBzJmN6rbk2NMu",
  "key22": "36HVEdWAYo2h1bJi1Aw2rNTV4V9fUpkmwHpLBXoXX6YAgDHvpk5JLYviyoxnKzxtbVdeLgV5kXtbKCtqas42q4K9",
  "key23": "4Mw4MvMt3pJvHp9vpcMvUYsJeLSio7Fww9mr9PdtvyJhuXuKvddvjTWyYM2YKLxsFdGZyY63CHZe34qHpBiScmZx",
  "key24": "2iCGqjmfwQesb6Z9VHLCB2fbKtSKoZQnzS3efW8kUzgFv4EAWwXfAh3BzEHwAoyNe6WQGW72AbZmsZAz8bjusmE2",
  "key25": "S8thT7R5DnfKMBc7wNDWzPKCgHR79ViFa265ifLcuzAJ3JdZN6dRyveH3juoxbDbMaqhjvEZkq5cEVbmaYe2DRB"
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
