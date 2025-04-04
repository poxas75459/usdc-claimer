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
    "3v8JaV3GmKmS4XTAJ6aqmmP2nuFfdnkEft6xSUANxY3oMWYDviTBqS57FRZYVZ5wDmLkT1WVn8dBqQYmRqE56PSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5A3zrchquJ87RmCC9r7wLsRDRGMgm3k7T2tvqGdCpzXfbWMgni3hcox3CcFKfJ25BkgJDWTWJdxDZViw9BmpZrVw",
  "key1": "2QShgjL7g5xWL29j8Tc2cuSAkw2AXCZhP9oCni4dPJrBgJYtKEi4cqu9iZPDHMJTdYn7gf5N2rzXshSbFXdPeyvJ",
  "key2": "dki9r9ntgW3awBpaSCC2UTcxfu1Br6E2QfAbYbWEAT7fg6TmCA2opFNoAepLNsmQrPow8UH41Bo8BCVdV4HmBSa",
  "key3": "3oqXK9pNhPYwLpZtePKZKkkYGXvzUrKp2cXGSM2omoKvvnp7WXfyndD4PAMcRKs74dM4Z2RYtpmTPmpRLxm4EAzR",
  "key4": "61U97XbTHNKiTjf6sjc15Jy55qLAKXBBi4DwejFwGDJb4bk2Lah3bw1RfFFB6nbq5F71GMvjtyf6vQsguR19pzkn",
  "key5": "3wyUfqaQmjR7bKoVEpZb59W3Txiu2CMPuR5xXRux5cTetkrU4Gn5mFCWaqBY2Vuzezpj8sZwov343ghqPQYqsuUE",
  "key6": "GkRUPUAmCtzvNCg75cBBrAKxd8S8CAuWgH4qV73cZs5npTp2RoDdegwP4SgHcatjK2vypERiCuRGhNvvwnMqNmJ",
  "key7": "5jWLtLr2PBbTf4jwT3NWPwJYUZUFvBiRo82iiDzv7ZcFowUWyBj32xZryULQ6BSuickQtaEE6LEAUnbkeCzZcMQk",
  "key8": "5FM7KJsdrjxJ9Md78XW9f2Ej9LLvmeEAFjgDbuELmhjPohFEGDFtiAZsYEBhMqs4RC5ECASoZvhzoeXHM4WThFee",
  "key9": "2qNhiwYKhYhoX4JQkt9Uf2XK2PmZwYJHtc4GNawBZNtvqZzcUH8K5Mf3Ewca5JgYt17UhqAuXGPbDAqLocQ36eJy",
  "key10": "3B5KNyyfsnpQN1d9amhqd7a1VQkv72eHyRjYWb6bDbd8gvXnNuMnZNBCN53Zn6no1C6jECDJfr7uksqpLTqGXP22",
  "key11": "NYxxcV3ceH3dEqmTR4ZWEENQhatCaYjU9TAVZU8nZC3xvcaQEWdMpXoictttf7J9fCxuLuhucpPxKxJjoqU5Vkr",
  "key12": "3u1aSUc76jjnvqyJoUXXdRZW2Tk6cEb22vmJNvoSouTgFBG9nXskR2Q2cPjgvz9CRbAGRRyFfQVS4hKUKW9pqC7n",
  "key13": "keaBjuNkd9N9ki95FTXkvmyFVaPDyoFAQ4fXxJ5rKE2SGaAXMiE3vAXMkATNQ48Qf9WQDXtGXFvM3gtukUaiz7u",
  "key14": "2AEEaGA2S1Rr5rKo2d7gH4Qp1WTxtrZCYnuQeW5AoyorFfNhDgnj6yGDTZfgfh5Xz8kCFJkSzEH26NpJmYmazwp2",
  "key15": "3NdPxmfefrChRGq15R2RSZ2oQ3P4g7LZY6EU2PDWoqmYKrjMG9QCEkcQCxES98E3caZfeYt6TqktbRQmYWKq6GAj",
  "key16": "5SNxGhCik1SuC8NiKrb5y8K3mgAnKNHWxRS2TdNUdYdN3RSiiQwyzbJJNGHUPGFJGVJFiXaUFCyhXajL7GqAmKvK",
  "key17": "wyq9S94zb4qcmnUAQmcofgQnf5aUxaAPhnvrmFVBia7Qjt4sFx9sVNF5kRC4uNmufTup5FntCSZDkEnK8bMvFXw",
  "key18": "2b1VMyDH4CipjYiuoShrTA3yiDTxSKGmAojxad7tJWBY3fuXMQrZCRNfWZCUvu8Qh8CBCWEaDAbJvY7M4rFuB9tw",
  "key19": "HHqUjWxzFvv5XBenjQWygbWHLipvJdgGny9VTaGCmJJ9Zi3vsMwf1Qi5rHJU9inaJ7vyLXdgdjVXt8zW5bgUR9U",
  "key20": "2FoBju4hJuVFjLuPV2ac7tR3QQZHLo6VcFEJ84CDNpuKUfsnHWH58cH7u3mPrrwKRMytQ7mgsDx25pRQpsdz4oxm",
  "key21": "3B1EcxRZDKXoTXXU1MjPfWJuJRv1AWrGG7guqgLbnhYjXspd6Pp31kRGnWaRRNHFmbw5mCUzmQoPqVzUxRWtbKd7",
  "key22": "4DX7WCuk15K46kWX3b6ZBknf5iqZrgJ9J5f9aUQqEy4WyYUDECDNjpLUgXN4U5ynL2Up2qMpwCG3zj6Y56gwBYhU",
  "key23": "2ZD52E5suoArFZht9vmJKxboVBCqypHF6XYkgRhH2wBixZ4yVBmn7816uQnxn6VgXW6c9mbjRdUrZcFY4VBUq5Ss",
  "key24": "5Ff5iUuhbLrV3jwZrYo7yGjvUTBkAPM4bkZkVhpCfeZC8wjo5yo3dVZvL25EYAYEC3dQonn67sigeYJWNebZhXy8",
  "key25": "4A9Hp2T16RrAXYf2w9tDhZUwoJ1fdid1CgfpvPWm7cYYYmqfsrfXHcM9fDiBstzEPbBAcTupFjrTjEnvqWK5Z6ko",
  "key26": "3vEnDQN8LSWoEbyGEBuVdZfhZVvpPaa8tbF5JMDvSHeMpvkckCG59iWxuFC4JwXu7WriF1mPMmPvFFwRG6wtkoLQ",
  "key27": "2f5t189dCoGsvdd3cCUuE9pxrTJaDVdfRKqpFV7dyRzBjx83z6KfgfPFphP7a6XshQr1tTvXcAo3qqeSz2P247Jy"
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
