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
    "4skjbn6F7N3xL7v5toDZbParDCsLpRCRukrZC5WcQ8NSDTDmHrkDqmKhJ1bXXV2GXY4SxMchPdBDjthxBses9JLA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UEqMDcEUJ1pLhEr1Hyw1cYX2iahHEXtduv9gqTg6ighX2s9E8VTiGb7g55euTfBg9k9ziDhjEGpoUcHX8t3prVv",
  "key1": "5qkXouJgBsWXvJALsXKmk6gbtuhnKZ6VMEQm2VGv9PGaVapdu4DxheRQZ3RnB9xidpowhNcdAUD8DRXbydgqkGh9",
  "key2": "2WPykt8WuWRCAHoamMpAdc4hvhavg9QuWZZ1LDcpjshdY2on73Jc6MVm3d9zX98jSwiZRQeEfBLsJBr26whvcAqV",
  "key3": "3Ts2UnnjVo2UAAHCbgoWDxVJ5jy8Z6kxhMTSADBhsZB7SgmqzQ1HVWUGd1DDreuT61Pffm8qE4fGHK4ekWvkGhvJ",
  "key4": "4rXSkCFRgaUuM1t6dbB2bmZWdzSVNMj3zYyu2VcXjnHctcBV5EfAjVWVDKGSaRdQzefB73Pjz9xiZj1eVgBLWMB5",
  "key5": "4zTqREGVjnmkkNXEPhLLtqaWuUw5nFN466uh2wr5Z2XkvEssHizunR1sXpnGaYTje2wT5D7TMDy8L49KJQk7q4SE",
  "key6": "5ySvS9osGi2TR8kLrmy89jnkRs8RnRdZzHtDzqL2YVroh5sKE1zG4ERH38wuPQdNQmprGgCtqvGhWPy21p32jPRo",
  "key7": "2AB1Md8XqXSvZ1t65CAoKk5mnWzf4e8tK3cjrc2LdqksiUPtTsY1jeEsWytQm6PxZzB5TaCFfJmsPRR8EfXVseUr",
  "key8": "3XAtkMZ83AgNZgSb6hPtYAj2Vx3ozjagvTd2EzWLSBrANUDTmypm4ykjcKLhmoJEpGxpkb9cXFXbBowQDwgctVLV",
  "key9": "79aUgHieromnUowfdQ341Kc3ZeCzBi92Me4tHWDJwyjHUtoaVGYfPeTidraWKWc54SZkdGDJ85gWm7vA4N2mrki",
  "key10": "5xiRz3dHHMB2fSaiz7u1D3aWaaZNknm5w2Pm7yg6o8cCs8t6P4oNYKSAhFXSXxP5Zn87QAhJkRPue9RR6KgcBF52",
  "key11": "3uHtmsuNmgKTXdf83gCcCWmfGpXZXUuHFGKrjSJZvhPYX9CY18oBtHswkQr9KwQ7CzKkAvNJhjGehrJ4cvE1LCnn",
  "key12": "Eusyz3g5niKABh2YbxZ2DDR7rrwf6fcJtYLykWjKdV5aMpeAg8QtdCkaLa9FMFwsBVxRsr7Vz2n8Kv6HG8KHZnc",
  "key13": "59RN7iCQKV5bt9RAHBpXPYZqfXiwfXXKDPjWhHV9iJ9QEk8ChX2np7M12AXz2YYR4uGduzCxD1j2zA6rpKSAAEBd",
  "key14": "iREEu7vRQFqdcjjq4GpZDDvjEwLr1eRbfFborejAi5ybBpBSbeHDCceGYCt9dQMn7da4f6CSh2dcubfSSGc1t8C",
  "key15": "5Xfbd6wC4yjfTJkTKTKUYT61q6RRet43Tq6wZf5XHNBPqUgzzw4BjNfBKCSCTcyMPzR5DeT1QS3ydFSA94LcUFzM",
  "key16": "3QSHvg58LtPVHd8aTCb5QqyE82eDZTWPPzHMxApdFHsRmNASYJMrUofbE6vk5BSsc8azNSoDgSAAJdUQCgX3GGU",
  "key17": "iCaoMPBNX9hqDB5a1JR2NWxzb4kUoL8S6jKqQKNgcMYvwfcMb1fAFYVCNAEoNa5u9nZ26hsqidbPhSmG1CdPHUp",
  "key18": "46djmj92P7geea3cRwTGGqEUkCqZz6uQVFoM8Q4xzPZK338v7L5B6o7rz6EgfFhGFM3jE8GtJUbbsHiu5Ka663WS",
  "key19": "2MLoztapXm6USQrh34yG6kLkv6zR6rPpkVkXnsAjg4X98pK8mh9dpNHrVkbNDdNaVCp9WYkeyiezsgKCCKJJS4Fo",
  "key20": "5PnZoFrqBBxdpccTZdWB3dwu5dUotA8F8BGGf8yMW4PsAyTjBFPStNCau4UnKqdmnNNDsy6e8GZ3GgirQ5yxM1JX",
  "key21": "wYH8S3uubuJQDYNjNUujSVxFndRM7mKmKRA7bEEVBR28nKq6KNVHtuLoSsnBVQZahVVt5XpUPnRs4SEbKUnG38g",
  "key22": "3sMvzVpiu9fvqBeQj9cpYko5ikF64snW3YF8eVo5s266dv2Zk3LB94iuKFKCXvbETLSZCUtWP9yVoWiSFrfNY5Q8",
  "key23": "4YMfv7q9RcDfgU8fpqzuCjVYhQwV2Yp7aSjJZ5aaAJfQbeaB63YZ52tF5ggDCMQzEncVJSgdd86YaYHAguF2Lxrs",
  "key24": "3j1M9FH5cZG4rVBDBWkZA3DYFso1xXJWA5E8TWNuVsu93DySBgJ6Y5vfMivohjUx2oZ7xG3qYRC9SpCnKbYNyXyk",
  "key25": "2sa84mzibGFkeGdUBZhAKDmSAprcLg1X1pLACgzrNZaHe2Susf1BTnLfNrKy1R3xAj3wBBZkVZJLaVn2XQxqeLAC"
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
