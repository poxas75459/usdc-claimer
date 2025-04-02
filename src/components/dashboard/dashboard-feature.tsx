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
    "6qswdVUDoZ7dXarokYyTvhfz8CrVY1rLDKJFiuAWMxyerLtSfpYKvJmXRMge8TorsECe6A3sZaaoD3SNGiGkYRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35Asgn6vbJLmKZqpbksTCDfMD8QJ26BiEn9EU4Zon16cFgbathDxYhdAg1eK4TZ8D6m2BYPgqy4Mv9z8DsiYfK1k",
  "key1": "4f3h2JGCseuQkxuzFchvuxTAVcuG4TwWpLFWFr8VCcNNUdYqYCQhjZVeNH3m68BdXqF3NjFc6arLQYL2FgFStgCc",
  "key2": "t6Sk255dX8qaN7SXqzM6p5u6Tdc9Lb4FpUHS9BP4mFZCHRbM9ncngmhndNxWX3bUjXJLpLoSpsyK7wVFMTf3n4R",
  "key3": "5RDoxcCyp7Svi4vhcU29Y1tMhiwaF6X8tmd1ndHgCpJroZWJPKqGmMSBDFeNKr9y4FiGiaYXNRjVCxTL4AQ91jhr",
  "key4": "4YdPUawPK9biHar5xXGiPrD4DK3AskePqrbn4o7Kt8uGWnm8wtMXUu4uAqWLP5AuLyhdWZHKmUkwM6Q1reoFtWHP",
  "key5": "4T7tc6NPjX66uM2YvLqSAZGhBhMzRXoz1eS5tJU4QYubP7fmvSUanZTePivKza9q9vtAFNcFRcCKpPr7MS89nm39",
  "key6": "2UWw7NsUbVWPjVLxVTo8TQGH6xp8uqnw4LDG2CcDeioEVxmMmC6hDtm4Sm4kUNv8M7xTKEKUoNrQ92Y3NKZaM7dD",
  "key7": "4EpaCTmkzceJKG4YKwWS2cTd3tbHsX8uHAe5VVQRnm9BDNhjWfL85BQTaVNp7B1iF2aco7pv15aaRFta3djxEGGx",
  "key8": "oocBb3sY5GXQPR7KpscDtypeCx9BPETYUGmt4GXcLryqAiXQnjXot8DB4zsD8T3FMXUY1ajE4dZJ3wxgcSasexy",
  "key9": "4xvfndAWaMahvKGgvcPMSM4pDi2eB6LuywGu9L4NmJVus6rnwDwdNUu8PDVToEKvLXrf4GwkHNkDwvs1XK2cdJxH",
  "key10": "2gXdZRncYxG9UwxKPWmP2p7ZFhZvjzNC4v8CHCMLqEL8S6B4H5x6GcoeFiX5DtXDiqBhuonv5BwkZ5SypPuaUZP6",
  "key11": "3L6nNbqx46xiyeDpG2uKhurttMMshYmAVvWdRx4LdNUkYA2CvpwPzuT6wkkPGdv31EGdg4VF6F8TLWHnwwL4kyfF",
  "key12": "5T2VJk1tzrrMnB9vGJBAezntQwvsXD2QFm8R67UFcLpz8teuzJi14MiNJ8c4TtneDw3ao2JVEd6K1Mhb7QsdN1tA",
  "key13": "56B94CVb1pCizqnDLUohyCqEhJigFhxu7gGkTBDRB5Tb7j9NZNvCh3BBm5gwN3TuiiLgMCqQaxy6BmyC4XmMWgvm",
  "key14": "3RhzHXzwFgf8DTtT4MiWgo76JGdWccefMzidEc2vNqdNQkz8e9h5EtgU1aW79QVtFajEMvghazM1aZm2P1gEW387",
  "key15": "2SaHAcbGtPbSr3SHYvaRYP3VgiPPc5iQ2R7EnDcFb8wo8i6uChNcJctAbMKjgHbL3XkRyuG16kfKDjNzQwGsTBR",
  "key16": "5H5PJPCPG2UesSm2yANx7SabGg4eGHQMEKnsjXGTszmgughpajqskve6AUJ6FoC7jV13sTZe6yjEHHbgtcwPuYnS",
  "key17": "4tt4CFXgeaBAdyY64BPJ2jmScLL9yD7GJdV8axBMvvRVAxAK74TKVoRgiqKf1dv73o9ExSbJ4Psy1RNLDko37Vfa",
  "key18": "4BEZs2L63RKD84j4jL9CCfvURJzEesdekZNLejssbg8jpD2RN4TjZ1kj3qU8h7YrYku4zJRjeSdPUHmdc5UBPF1g",
  "key19": "Ua1tayJJKwVt65AAjZ6CgPM2CNHNauwk4YpZuNQvKbCS6RHzqwku27qtK6vmFwtzfzhL8WRbQASZx3R6VogTU8Z",
  "key20": "5TSdWvNZajSRDgP5Z1JNTMFNnpkReefpJ1pc4CtuJ4zqxrzcAEyAAHiw7KA6fGwidLAM5HW3wXRx5btraM124VxD",
  "key21": "2vp27uAhFDDuuhecALkf8pmdgWJovJECFVE8BHwA6f6jhmPWyuXaefUkw9zeBfAb373HD4oUWJwd2hUhYvpJJosB",
  "key22": "XBwdogULtyn6jyxrZriNfsLzMY1uvoCCnzGt85myiatZVf2v5pDTRPEqQfroRKJ25n9TeKgf79w2yYXrrVFiwrJ",
  "key23": "418kYo3gxaXcXsZJMuihhmzdu7KonP7gSc7KCWR3vsWEspvwn99R6MJ3SyGL1f4TcBjttyTaigFRkptLV6N3VPSH",
  "key24": "5UFP9S9ryXDgmL8htpsjwbusUTNHhLtdLhqTHu4ARrkQiYiKSrtER1KWKHoV6XRJoNT7uq9NJp6YNKaYJmRNvk3n",
  "key25": "33ATPd6wKXg1khUDwxKL2NKhhSDTQbyJbmeUtHgTjErbH56SNSfqZirrnaaPnqaMua5KjmNihPnrHzL19r5GtJrY",
  "key26": "Ji9T8pT9fU9ZSpmYW9JHQAAdkriSXadT9SdfHioh5VkVLcLPmPEvR8ynTijUtEunetT7jqtTnTySfQHYUNrEuu7",
  "key27": "2397gGLhF2f9iPco5SFVoJvvkCDYQ8qhvDYQ8cvBPRYahEfXxWkdFEBpMXg48EqjGem15YLU81zzMaj2qFj36gCe",
  "key28": "52yTAuwem5r82KJemzsTXLfsZL94QvUVJfBRxuzPCj1GumCCJ4S2Vbr5x7TrRmohmdHB9tT1RiaBgSPe7uHeDKLA",
  "key29": "4wNCjn3SYVHejzp39x6Ti4vfsc9q43H3QBmbMNat4vmZKSVdvHDwhGzBXjxMGLs8MvyJoQaJsCqifjk7YwDknKkF",
  "key30": "2PoaHnxFH7P3LSZRV2thyXHb7WSBZ88KJvWVnU3p5pzXLv4ZXt8EVsDLgr9YfgwG17taMnZQ7bC3Mhu2G4e4GUCN",
  "key31": "k2QFquCEuNPnNAkMNzRtRsMcfhw9rJT2Sf5uRfx2jbzNL1NdgVCSDHtWPMWpNYT8AdmfrPPZGBXaZhmpQf2HjKV",
  "key32": "4pwur6AiskNmiLt1kPFSnY1x218Yk2oXwHr21MN1ukVPcPmVHguPWCFRhJ1RcMUTAd5erAdt9cGAhBi7f5hhRvhU",
  "key33": "oZqs64L98JW8sTuUq3nLQdccKqBedVC4EtQDGuCFbk5ESw9zTGPSBcrCbnLdgsQ4bndigonAAn7westQ16EbpRd"
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
