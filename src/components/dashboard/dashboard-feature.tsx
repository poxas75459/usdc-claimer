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
    "5na2srUcLMj6sNKk2RGoW1S6uTjTjdSQQKwN9k9DnJyt65etDbs7zA1r7GcLn8axnPzFfH1bFLVqKTz2YA1vX9SG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtxfHosxJ8w3FsSXdw5QDAs79ANKfq3v9hdHrn4FMCKLNH2pmp2KmjunmxN5y2BVGZ6JYpdZwRGg8WFDjRCgQAA",
  "key1": "4WsrkcxjDWrm4Y2iymmYbvPMfCxmjssVrseGec4JGxYeWajLRJ6CZc41RrXfoWsQNkR3GLWWSo8bBEt7g4HBmrx4",
  "key2": "5Aobi5kzEgThe3UkCWqLbeQ1TTxXVccyDYHdoQVXd4HQRHtJx41tVHef7JBtgZGwwDnqphdXBtoEzeHML4ukSoLk",
  "key3": "2DS61FVNb2NkvQTd3nsJoodv9RfiZtiPX4mvgPeHs6D5T7un8Jv2JKgXLpKZ1UzuPmtk4PEE2asoNiWD1n7jXZPm",
  "key4": "EdmycBMFNYFeMREBwbN6ZtcgxuMhkpj9W7ha2qszjrSterfbCwMZXcFCWHXQm7nJfGJtSLF5TVCCU9N22ouScS2",
  "key5": "3cScJRZDwWLAcr6CDzt2gVzi17hjTcmQfwr8TioqxkQStphGgKzq7A3fyc6exs4JTVC7GR4vg6hywERW76KdVtcw",
  "key6": "2ocQh7h6J4p1nnVgianBA2jBc52csnyvpRrxUrdXPZGhM51Z1JHutFgnnY57rLxBoHw4TrDFhoQZWPsutiytxyNT",
  "key7": "2yfpZsq1caPow7vxZuHszCEfDY1nKmnHChZDu7u3sKXzPJnMhnP3G2B2UUQHpDssEYgUvAVdevDceFv8Bu332T9M",
  "key8": "5jMyo3Ubtk2Ua3cRpr2c5tPi7m6akV5jFrCMpCGrLnC961USqfsoK5VB7AjXHnhSr8xFr3srorHMGjTSeaRAwhx5",
  "key9": "5pyd9HWBKguszUupAngE8rxn5LJ2CmastBkhzSktXjxNNJYFet93HNTyKToyQgMiwMxyukPxgMaPSid2P36Qc9hk",
  "key10": "4bNR8cJ43sF3bQnV7v2sfJ8B5YVke69Fock2PVY2JQbEHaWt5dpW96wgsNQntvhCNnDkFeRnyB8E3yFYCoNKLPRE",
  "key11": "3BMgzEQhNDnCx1THGGVP8be8ya9wahEwDAUoFtfp8iwSzX2G73aAGnHGeT5V8Ar3qEpxP15vbzSmiaVFCiZCSPXr",
  "key12": "3JeDZqbQTo8s4RUP3NsYVnC1xkrUNMCKag1VD6zvUNpDXs26efnPBQAvJKnpVxWFpMUM51VfJwgzSs5csRwr4mZE",
  "key13": "whuypAyxHzQTzhgPNz7fn7UMFmdKKss6x7sdg6o7dn53NiEaiX2QNsvivtgnnFSBHtVD41JFdwLjNwdBDv5Bi5X",
  "key14": "3PWoDArHUBRHnseF1YHtGSwtB5DRNvxLcLQN1TF1CJ8H5fFVpYnWaYqJTCpXXxmrxMsVU9uwt8QeCrYWNkapUqQm",
  "key15": "2tHKmiB3FRSQaPEQ8dJ7HTvNruot3XhLYMCwQHFqmh72Ca14rCqgVUZizwKkHHjwixsVLRXTSBfYK7mmuQA2C56o",
  "key16": "3yxti8FMP8oauHJhw5Kn1WvT2nEUbczYG5AaJ49rvenPExLKp5JgZjAx2Dxak8DWHge4rXHQdQQa68pNy5PdR94P",
  "key17": "4RbNznY8XTGXj44XDt4h59XMBH1dKjqg2CSUp1BzHoo2b1XpMWjyAYhcmkyvTGpGoaKQ2h7XgMDNm26Wzing92ax",
  "key18": "5vtydVTicYBhYk95CLjDqZaKRChYFEAQ2Vz8esSxbKrNDwhjcPBkr6MmHaxfoVpFN4dz98LwqVK7QLLz2rz6ZqQX",
  "key19": "44Y7xNSgt2QmjzryTjYRXb2QnjNnPfBNozjYtFadG7TKP8rTWZkCn253RFGHY8JyoHsusWUk723F3CJzW77vF8th",
  "key20": "W5QRHwgcGRKpPfPfpUDeTgJ6FFJSvx9763EuuiSYY54oDePXQ4ztHrmLxh9Tjr2557kJYQCWWhjeNqkHKHHijoq",
  "key21": "2tPgXn6zULd1jEqmzPyyJDLPe6d9rZoRcHMb4HzbjzB7qab85CfrP1ZhvQRcZtCfQFHVgeKuhwQ6o5icDiHPUnMC",
  "key22": "5A9EZt8ZAa55hBzLBgRKAbJHAUoCuLesqBxxVajihC55sTh7sGCJPs7JHmx6gqeqPyRU8BBjj883cn8frJt9Hj6i",
  "key23": "4VczE7pFBxa58GxUxEzncGNz9iYQkJdyzqZsxz3dG1jZAPeZwvHsZ5GHxJCpemseKPMXHRz5Mw6ZVV8PWaEQnXL7",
  "key24": "4RfrRqx1vq2KPxnERQQMdfK3A5PiWbYrtDmZr2JtfxwT8WgXzmBezb5mtTchPNpdDS98UKtNAV4yXYGd5kyWFpqV",
  "key25": "3z3QqnNaWpdWh3YYxzMcVYZofrwgSa6gtVCe2f4mroMrivTxvrhPr62Um7dgjmyhw4RZMwLqzviNnUdqRy1GcTVr",
  "key26": "2Wfrzmfbo5NmSZdo7QrVubB49uTdCaq8ydN77m6uawVVUSmBaKsfPmk9kc3SumfxnGiNqpkzozYRMQZxM1caF4yQ",
  "key27": "2HjFph8G4pFvdqbobUTQoUwvuWtJtMKk65vWWnh1nZRQjrsSekSvi7NrJ85css1LE5hq2hvGJFtNApm64b6jbvhm",
  "key28": "4pRnKEUsYWNWpspzUGRqW2uv8SFBV3EYJZFDVrP9FQbjsRHmiq4Nhdx97MzofGYNsDJb1qnbdKhbpysAu7D4i6vC",
  "key29": "bcRcFvNFw1VfpbsvUjgnZMHvMGvBF5RcD3f4C7s3jha8RSuPEYaNMHndfDczYkLTzQL8RxZbJmvH1JYKGRwEgth",
  "key30": "Wvgumz7Vz1wtMTmo4uXGcoHP5YpHLGhqQ2mDVbQYdANMap3KRESd7tXA2xtDZn17kwv8DRRwAu5Um3St89iNqMX",
  "key31": "5jEosWbLM9y341hC15KY9zpqKeQBNeHszahcw8PJGuKUpUrGgSwefz32SGMEdFqT4BhEZSEGAGivM5dx5whZoWeY",
  "key32": "3wY6dkUZ2FDTdLq3rXjC3emu2VXoDWgwGGfUuoQ7rtQd3nPhSAvHBgNYRinwejT6Aa5YsmqZLaxL2m6BePKKkvj2",
  "key33": "2Cjb7vYExha4nfJ28Fqp62GZ9zKaUewWP44E43QdmzzS4DNiKFwbEKBfJLKxwFGGGNtLsMZEeHjog2AyP7Y5x9BY",
  "key34": "3AAGnRjvNBHHcf2dTZgHgZRpNPprG6veEnrqe61dWj4WcnTp3yRqUwfGBgasVW355P57hZDSyiLjCUe5FVqaBxeg",
  "key35": "48jvFi7mxt7W6p2MyZAerGSSof4NvkEZk4nf5VAv6w6P9dGfszBf86D3g5vw64naWATf7ifGPsDrxtGtTJeeZ5uF",
  "key36": "4L1Qsyb8HewQB54kwyL33yTa8dHAPWXwvo4XMeX2vYaEvpoedAFdFhYcrANKtnjZ1H2wunPvM2XPjKr7ekRjjfv7",
  "key37": "3MXHr85fGk13d3YmR22LzMKC1WwtTNgLARkSTELdtbiB5zkhoQyB7NWUAwvu68R44hNtQDYBSHbkheui1VyMtQEk",
  "key38": "5uE3UbiCSxUJkx6DtEbt93ka7pd7oCCrh1mr4NUVstxpMmMWdJF4SFgeePkn4v71kp6U5Pz4TATzAjEwyt86hiGv",
  "key39": "rLxnctmowoEVnCttMJwfZ5swZVkxzwdBWrJfVcUF47bYDD8MqBMGcKQrY4Ugzz9XgwuxiVfx3mRwhRCCXeHB3ao",
  "key40": "3gyWeXqtTJzJEWBdfUL6873rrxZfWs699AcozQ58FhhE8dFtnbFNVnYvjRgZZvMN7N56GGxTan8qtK88t3VJkJAU",
  "key41": "5wJ1Gv8CUkoFeivmmb81krnd9mrrztqa82RsZ67hdZzPH3FgY6kWJSfVAbMJzLiVJuaNivrRJZLyw7VUVajjirLd",
  "key42": "3BfRYcbjbgKMvQC6wavRMwHJzDG7fqD3YnADD7kX4Hp13U81fx3WFaEnjjkXTsXVmfuKVQZKDaTsQUvEdegfYmNz",
  "key43": "4dtAJXGVhJktioDQ96z28A9dD7fCu5R7kuQbgkzE9BNcEMitFnrkicA3ovERBidPf9PD6Bepmc89N2jcsByV5piE",
  "key44": "4GebNJeNxZKQmRjapdArPC8dP4EuW4ke4MkKDT1mpos16UxWj3ZJMp6PzRVFAYG9PELPWCEFBBcZTR5L3tSLifu1"
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
