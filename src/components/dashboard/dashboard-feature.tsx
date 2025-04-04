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
    "2JMYQn95ivPh8pMcJ96nUVC3qkifY1387RKfbn2HF2yHtbjrEzNnEe9uyZzCXJGvS19tiiRp6CpdaLrQf6vBiHMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2smzGR7z5VNm1vRy8qvnukLyBrtPLuCPVKv91kyi3kAjagwrRTJpE6jw1xaZoUzpSgqAsiug8e7smWgL5E1XN5bu",
  "key1": "2HrtyFjofq6zdTUc1pPDZX2P34Mg3vmmE65eu4BpEqHWRQjCgc8WSfZ7L63mC6p8tXthvLPmSnLgdENZVZfPxR9i",
  "key2": "huc8QjUVTh8mXbtt2Q7xsFqyfEK43YwjcpociQcxJ6VWZMcGUCMkNkEfPyfHuRV7uhiY55ed1aKbKcc4QQxAGfv",
  "key3": "458uLzFisi6YWgvwEpy7y87UZ59QqkcMVQ5HyQBYRuqB5KC25gDTyBC2oYB97MNrPnkvm8KHSrekV2srh3VYwpV7",
  "key4": "24pJbzp9XKqLpnq2LapHhyWijibQ34hj2Ry6yVyavyUgbo957XUhrBCqXUFicwgWefHodos6A6ArDrSQjCMiczba",
  "key5": "5gg8K5fAz4NRHPCLEq3HpiTjkABe49LXaMehuSPST1LHyWLgaDYCCRwP2WeXtQoJoZPH6Qc9sFZpiG2LdvtZ6Gtz",
  "key6": "43UwwpDJG7jhWacaoSWtrwLKVeXh4ENkKrtCCTnPAiyJa3GKNqsjwyw2oD9ELuyQQg2QVKiSzzBJXySCEiGBesk4",
  "key7": "2F56QL9bf1W9kp7tAud4Tkkb5VADjgxjGe5aXyccG2CB2F5mMw7KsmKf5jVuiyw711eSCq75PnqQzqc9Am8JH128",
  "key8": "bDo3i5ckkjGtv73paAd2j2oeHD5RtvdvKzNGJP913eX41skG5ig3RvHocPSdAXPucpdT7N3LZN8i8vg5sawyqwp",
  "key9": "4Wxgr3epuVC5mJtVd386L7bvy3W8eQdcuyBN1k52xd7sMS1xgrMbPKTYqwamKLWuuxwxPX6cQccax9FrmAGjhwbf",
  "key10": "3tbf5AAGydZEijCDzkq3wYRU5fLxWH2dxjMQdW8Sk7hboBvvGRge9PHMG1v6LWnWw66TZrVG76yCzfyM1nF7RiXB",
  "key11": "5UZYrxZyodzx47i8Uys1rFGDBwumyVsQj1njZ9JRjDEgGyACFYmRqR2fV2tLFGrMKMyvpJY31T51ymz6NLh9S1oB",
  "key12": "5VG7Nh4UkbpLPwbJCjgSGRicBu9XDH8rc18d7RMTwyxJp3ktrrayxRuWFkrApnBW68Apf3gedLjevXk8Wf5SZTkt",
  "key13": "4jX6Xb6U1DDrNvuHmMS2bLLptpj9J4FhW6GpZD5YK4dxmJkQzLS4EX9MKGeDqxAMcaFE5uDc2iZSMGiwzdub6XMm",
  "key14": "p1azRmtjAEvL4qAgbegKiBLnxwtqms5FqrRCPbJEP1zXj54mAsWAfTeneRcY7hoN6AAr1RP3SujmAYQmMH8ytKa",
  "key15": "4fABsQgqYzV7RMGzm77zU7fgyc9zxLCXuSx4ombTQW4RbfKieH8EF6TBm2ewi5m53KajjVYshAdnraFCqJvg4hR3",
  "key16": "42DUAEiSa2vEEnaKdcicNvrCtwGFWjibFSmQXBYVb7VNiobwWiWKLQ8aWQpJMqkqf5QjfGZNBapAT4r4HoViXdXA",
  "key17": "2P32EV5qfF9ELCuFEwQJCnqey9N3MeVfDov4ZNmDhuAsaLSxjH6tYh61sxwLNVwjHHmGrY4FvyfaQU3RVxCjas38",
  "key18": "Zu23Ayj7zWY5FJY9s15Bozyy4xkWxMj4SQGemVsS5tZBxTq7edaBRoeWqxofSqZUNdpC4M3QTUf3ZRwGiQUPVfT",
  "key19": "bD5n3XTwo6QtHzSz6WQmdfTfbJ8RC7qX9XvthgMUuod6dVQK1fq3kPXhxzni5DDzeP8N9UsCn6dxzVBYvEdzFHm",
  "key20": "4HMQbPgEv2x4XZR3uZCxmcmAPxgejeBdi8ZpWAyCeKVHbhvEP4HENVzsC3W5Tq9Jj98A7dsCL4E9kSfQ8nLE8FiY",
  "key21": "iuYJxcvbRSfg6mdpFHESpQJP3MF83oLBvz9cvDRtBUVAQZcFuwjXGtibApqp9cF1azShLLuTNLfKWFxYSA4rJ2u",
  "key22": "41J9cgGwuXugNKse39t3i1ZJ4fF1DuuKoXqYgY7gU3hbd4qcFUheSniRqEm82NmTryJxrHNCGwPRbWeJESrmBuun",
  "key23": "4tD7wGUoWBCB3hHSR3sQ9RRj5h7YwdMMh1c7S62gSVPYtdK7DodrpV6R5S3y8prgSB9VYLksuZnFfjN17BRKVkUD",
  "key24": "1sPm8NoGmCe1bGfX9kwWmYazP6L35JMhrCPQnCRnV1RgrXXM2KdiPNcWN3Tm9gVLuwMZd7KA2v17qBJseYkPktt",
  "key25": "Z1weGGHgyDWboKu2hK5RnmFqp7YSkByey8XL4QN3Nn3DNJBSjYvGdiqtMerHpi9Yi8ZPB7KgQZKRXuZ5egdmP6T",
  "key26": "RozGD5LE226YVGV28adG2jwkp5AWVU4i7v9RfzpjeRCLT2BkuRK3U6w1s6x1Sb5hiTRw6kvRGvYNMC8bZ2fcJMJ",
  "key27": "2JKxAKwTAr1w51U6SBW2hoCeXYsi9Aeh2L2LRD3A7FJYZoecjg6QvLhSVi7QtvKZ1sxgT8QK4H6ogynKQT7SfzsB",
  "key28": "5NoyjuxEXnJP95jpPFnHgvATP2vbXRnM6EBAWXG9Zrbhfu8n2FjAKMbMuTaD8DRWKBRCJsZESeFShhGLcKN6vMVg",
  "key29": "2TsQGB6j1pxaeNX7AGrsCCyRqyaBW2qDdHGbdFans3kvqgCZK2b1qhJujXxr7cRiNqud9XV8jme7Rgi22vhK1Qm5",
  "key30": "2shUKQycNQhScJJF99ZCWxa8fJ4b9egh8gSLg2uAag3f65asxMTyrLPcGSLL33yDNR8thgbKLWog2LV6GoSA4Ru6",
  "key31": "3wzYinuq95wPhD7ia67MxqRZfDbmk5Ak2EL6BWQ4JzUQujYXN4xxaFgdNvHHKYY1CtVXEXXBuWSPsfd6S5ErYBne",
  "key32": "63TYYDbMv5JWF3YktJci9sj3mrP5dYCjmi9xJVAsmq8ah82KpPQeG9XK6biLtCqpgUjBWQTknAXrQQNbTU3aUAfV",
  "key33": "5zpVjWesjk8KrNcMjpNH2eX1xd7MEUdY2ACyyUhMZiN3rrkRFjEpdDqLF4rY8BC4LG4CcR9ZL1KZfPd3yegp2Tq2",
  "key34": "fSoiHRxZdMKcTW8ATDu1SVcoN7Atjp7gUi8UgLCgouVw4x4Q2CBcVgUKJoWSTWWhvph8Bc9aij1QTpxLwU3Wmra",
  "key35": "3DnKGUZ4JBUE2tA2afCMyEhRVZAMHrp96eEBDcDH5E2pToqpfwccUoAc6Tn2sUfSifNBDSNxLPdM3cVj3oPxM7U",
  "key36": "VBnq8prC68U43Kmo1UW4uFxFBAyuTpjyJjjyFFSozyySQa4HRySXhQfQuL9E1p2pSXyarjXUWBDJxKWKayvRQvV",
  "key37": "5nyrXqsiryA34woFe2pXvkAVUoRiwHRqDc29sSFpqs1BYa99CEJZ3S3zU5nXaQAfjZDvseje6gTMottYGBmqMEKy",
  "key38": "fBpVrG3Q4LPY4uLEqpZkn42Qb6eUgwbfBzFA8MKFMezQiP14VDTGJWS4zKRWeaSJUv8RyGYNpfoKo9nKoue9hz5",
  "key39": "26WMgz3tmEySbeTYKtpCrFWo8Z6XSNyJSe6gA1JvBxGnh9E3vvcGUC2yBn4j3kHZWTKDTeLCLDwhhHdD7d7ntJ9y",
  "key40": "2riBVQR82tRkCdBugh9ugeNAfz62KzGJ6Xv6CRCdT7fFfQYCjKvVSSTKEuqdZQmFLowdanF8KN15iYLBZhFgpT9m"
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
