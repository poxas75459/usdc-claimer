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
    "5gvxgahTK378ymPRt1tkpKe48Didv78suCwy7db2qyERkE5fADnC5LEcopNG3yALGNRGN6HcnEY6StsstNPxb6xT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kKRfsG8yAv2vJDVYHuMxdKiDAfRBTzPJ3GqSfKpxUNyxTWeQvTJ7pyoGFUb7zJo9G7T39HpUkRHxWkyQgdKydHH",
  "key1": "2Wsne7sbpu4EqHWtrn6gTD3fD2ZWBzjXPuUCtVZxGpZEeDAk43GXdnVfaK8YJCwxUP97muoNP7pZgn3j4Z29aUdS",
  "key2": "2VAAz1dTTjZkKu9NaJJ5jTKfyJc2jiiUwDFxpVsEQ7zSGm5qdZWe9oACC3KZNt7X2JkNRzrJrB99HBA1qWXzLwpT",
  "key3": "4VySitUo87Hq324BVTcMKEEWn5G5KRs7LovV9UvFMC9zPWZK3BM1uqCDjhr6xQdtHGALf6FfSGyBHvVbbqf22oHD",
  "key4": "ExGKxtzE9ad89jWQSvCJxQRVUZDUeudhaa2J2cemRCeRgGeeFxyyZu6pSTokAxc8QozroL8TnQjrfMDM9NhBLfF",
  "key5": "67cWkDKjCdqxkwywXCVJVNHJaRjkMoTaj2185XNpATrZenG5JnNRgWk4Ag2ziufj5j1jG4684BchiEnj6E6QUWZu",
  "key6": "5Cm7Tsjddei9JTMzfUvPXTumXYViBjgzNSk3YTV7GHyNy2rLqzkootCCZmsEQdgWuzt3DLjtoBKFgrQGLJM25GNp",
  "key7": "G2uj8xPgFT38gJSoSkyCjoqmJhLMwmt7hksuqp12NG8aV5j4oEAUUisKrQ5fXSqtgRwACsa4qAfWxphAkkCPjGW",
  "key8": "2Q1Sh4UfonQa8HnZR458864SHrzwLQzfxgnTyAGAk2M3ZeuqUnRY2PaJdCn6f15cBnpVPwZpx4SgRz6hqWK6bopJ",
  "key9": "5Xz3zeWgA63b2fu388aEFzd5UEHdpM2xx9foNxaynz1sDxXexaGxsbc5QRmzzcmNMZD6iUU8WFzBQeaCu44WX4i2",
  "key10": "4eWsPgL55eBfzAADieMaN4gAczTiELRKQkjg3A8H31RD2QgKGz15FujPuN9htojXCj1ugc8GK1fHbyFmxtAJRSpJ",
  "key11": "2qfpAKfPJ2Hb5xwwJiQrVxScNsVZ9VP2G4ug1LxUv9xncKeWsFzWRCQZw1TtaT2TCRQ9SyvTzpKD8vusY5CT28P1",
  "key12": "318TQyJsa73jsRScPAncfqHQyyDXM8ekXC5gd4T3XPG5CCacUrrvzh6BNmRDFi8dCGf5mtFz71xRcTDPi6WzcQML",
  "key13": "4uYn8s7ZqzJnYKyrzyvpg4ab6zzxE9DaHbPSY6vNgWKewcwgVrGMx6DRqveedPQgT83JUj4RexAexBEoExJ1bQnJ",
  "key14": "UePmLoXR2uBE9WJVZW4pBFQ4m7BxK6ryeVeXKTSmCSQD9aTLLRbWDitEvFghEMYauM4p8cgA6bKgUg1i1BScsDW",
  "key15": "2XHs6mf1oyH8zRrtrq9Htx9G5Xj4gSeWo3rs6gCAgHY9Gd7hqNX9MFMwAxMBD8vqqXT3uaCYQ7iQo2XkEBY6L8yc",
  "key16": "fcECawCTM7Jq7UcJWmoJxCKfM9HYMucwA2SFY5QWdoysESvi4Uk9r596UHBEEyRf46v7bsoiTrkETi4G6MUQpFW",
  "key17": "5paSHhE3RYoUgQc9QFDMy4zTKz3ao9xtKs3p9DdU4jUcbk3JWT3VSYSvjDCSCB96TYDu5tGcUihj7juTBRrmnVqf",
  "key18": "5ZTUun6eGDZj4BWJY7BBkNZfEKCB5A3dKV5SknKvzkFwqWeVdEkNu5pa2SoPF1DFiGj4mMkPcZrn4G4EbhFXwLQt",
  "key19": "2skeaGcPx7LEyay9cyNaWi6zvuzXxhBFTysD3F9kt87NUG2TnrXkBiNHJnFVZxYfYPUpxjvnHiVxBq3RH1G8BKYs",
  "key20": "62me9P1Wu5cJJpwNJ9dueZX1uV8YZwzo2fpSFQ8PGuqAG3zoRHok4hDwqrixHbXUVNyBKo7Z2taU85Vo3GBv8eVU",
  "key21": "mnqzzhm3EoYedhthwgoguEzJu8pTEFCfdRNrjNWcvcBLUgkcGWCkkrdLF8eEzmMaMmdZ9eCmFptVcwiJqePo2Mm",
  "key22": "84LC1sonuw7Bghrah5Az7BMa4fmP4h2LTfhjPv42kjJp4URAisfVzhws8hDoNjgeAfewzre6DuStFjLvxbP6eae",
  "key23": "jrDfEBy7jeghwYPZ9n9US2zi9C9h1pTVeojCaPrGFvbQQp3XizZqpgrWtBm8q2WBhTwhdDzpkRvfP9CQwKTTB93",
  "key24": "5LL4VCD9qLNunVqngLbDXithorvj3xM21cb1hpEdvAMqx34btpTXK8Tt5bXEcpki1tKVBvSyRyhKKRQrGSSEiBg4",
  "key25": "2Dc41FSRPrXiH2VArRhzz6H5Cbf8PBD9vm4wEDsPCgRNJZMThDLjaEYcyFVJjr1hf3meXRrqfyWkg6LByrUM6jij",
  "key26": "4bxG2ZdmSiMynHWPN5jWUVCuZia3DjLr1vMeLWvdiKnjzNbd9DsNqeZemdnmZgFTpLg3WiPfWB9mnVsxGQmXcrnj",
  "key27": "3M1mTqUJpnBxd62iEuKXFqAd8oZL4DRfqLDPTUNSfagvBGzLBzmG8Pde3C4jfBwsx8zKvbrme4vsS5AEcTu9MwgZ",
  "key28": "29PotwcWuYzUWe8kr7qzat2FnRqPewZbQRKzDns4v4vzjhSfiQmc5Uy8Hmf4Vu8K8GzjBTBgJoW5PuDg1qb2Z7za",
  "key29": "Y6DSN2HfLnosA1nyGyLT4fzSk31JgK4w7jkjdQXRMFarnbniVnyPXAtDNUezXx9rRWg1D8T6h7F5nTCyqxa4dWq",
  "key30": "3tUnpHipiyAA2v3sUsTNAd2Nby34KrbAtVi8GJngmTF4cnARph8ubXj4YYccx6rsdpyrhwRUw8TVA222Ara6BkwZ",
  "key31": "3xehDczk9t5koFUa6oxg58FCZkh6nLMoSVFPmfiqUEUecvPA7eCKScH8S2Eckh2CKJLh7jbmz4qSMVYYFVif12PL",
  "key32": "tCRfEqcwCSPuxyTRMtBxWFem4hxHRX7F3KnQBxTGpjr6nx6nVVSZEr9AStG1SsQjQRrXBajwzGTkX8YF3vnSSwa",
  "key33": "4khW1vRFwytAGYvWaigXFE5HXZY5dy2Qm2pDm1jCeFzouSBDdWUtSXUg25dMJXYnNn8478rkRBiMXcsgZkYDUkFe",
  "key34": "4HfzoucivEbLSjPWpFh85w1nepftyfi9TXhD6Xj41ezK6bUYW3v37A6hjU2DW74CZumk4AGveUZZVFkczhvn4iib",
  "key35": "2tcThHnwUxrD73TM6JZtsBjv3Fz2UMcwEuaRCLwbVSusUdfu9zEttnEi94vuA3rXoK7eeoVDyTnRdu1sPmWSoLjW",
  "key36": "eXDz9voF9Tr3zKGUJCXPqi48ZXkaZDgZHTc9XrjMMDtzqgsroRrtb6amWE1BUQdfVrsFqqBcxPpNbMrEYh5pknr",
  "key37": "5aSpRvmJpcKteFJKFvQhum3JhqrQpsQj5qAtxGHWkN6kYHrEjDTHDWmQXyt2ZfvWGZuepE8GHSmDZqtH71kyb8jH",
  "key38": "56BACuCU5BjsoN8nraUjxBhCVCBrhAbHELX7Adakz6TV44nXVE8WqT16ixByh5bGjfLA2hgoTpXseqDisCo8HWh3",
  "key39": "4h8qTL4haLWsAanMYfVi8sAvf5S6TWc7ATe3woP6zEF7GWoq7iCb9SJ5U73CH5rakgNope7vda2KVGBG6qc9ExeN"
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
