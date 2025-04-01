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
    "237UTRamygK6rCKeopYWzPkt2LtSkvEuXnGPvXyTpCAtUwBnDqDh1oR9nwc9YTGdhYZ6pcx8aHcY64pSjs6SrGxU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qs2pyiVvDR5tGpWebfJqgMjraghCWAWXmSMKDTrJcUSJ1VbrEXFoPS516HngVPZMq7wG2ZYUAtuHPMEV4BwH9fn",
  "key1": "35ighm2abYMqjzJXBP2b6MA9rp5b8QCJ4hfD8cdEWzkTHHrqYNXkVjzL7jJYAJoNMay144wpPXAvr28foMKndduz",
  "key2": "5BM4FADJd4b6u94kKFfLB8akqDPcgAwCSPQigEmFsCXFmhLNCMKFsPaR9DqBioJqi1CDbaAcConX37ezjEUSXb1t",
  "key3": "2i5vrhiFruvsMhiHf4hJaYQNCWNuaPpGXzAiRbDBNZDQg9jPHkKK79pK34i4aeuPkXptycfo1yNBaTrgboBTqeG4",
  "key4": "2SnY3kud4Lgrcdz1msbuPFzWyrKEsBVdqx6LJqgWp54ok5p3L2djKy4RE7Xa822JB1quSoaDeaoYZrFRc7whZJcM",
  "key5": "FuCYYjgoaLi8P79FF5mDMSRsCuGTFkAcsNUBjo6etbbS6XwSAL7HHKF7VjZ1YnZff2tbRHS7GAGtBkShS85hQJk",
  "key6": "66g2WookzSR8Msj2oQ6ecUJMNY4CPhMZcEmkxw1jHwLUVqS5L6pvQN1aFQtaJAEeYwGgEeCoDNuixGJVuWBfx6ct",
  "key7": "ksZiSykgVEnfnmXXhCHrwHgcJiybZG44YpjpbXe2q5uWdT6VL1AmRfKoofoXgzCxKdSLLFiQaParA1XAzvbdqHR",
  "key8": "3Gtjn6hztagZddwKXF2GvUGknMwfFJ55Pzc1U435ojd284tRey1hSjov431Aa9jWacLP576eLBLwPuek8SZNjPdD",
  "key9": "3KwVFQbioNkWdfWN6WwYemjLfcy2z2CxuCSd9t6J2JaaDY8Z1Z31BB9tqxDLbKnnz55BGAr33fqcKuDgzBCaFmHc",
  "key10": "2NtDzmM6X6DEZyEvSBiWF9BG1tjR7t666mcXbCzUh75M2hfPKzLQpbyJXBGyavBmFpZmJMZWgHPuNDVYdVbYDS3U",
  "key11": "3dkqFsgNbPAmry44WsUXJW1ZjNcpLD2Gya63KV9C9DpnYGAg2DUPznYP6ezQHqSbrZVhQ26Zf5RVorM6DHnH2tkk",
  "key12": "3oq1HA39RYvnEt1BNXSyQWLgYJXASuyTLC2YcErSUVTeVnNP7wY5KruGyZanUPiPsyY1bu1qQGBrCSMBPx5V2uwa",
  "key13": "4ztSmdH1EMTezLshUauWebeZaSZfswrnNGeZ1xmy946E5zFhUQr5aMfCETMJrdChy6B5c1xeaKbxtRRtLWUz8mG5",
  "key14": "4onowcJ87489TKp7JPFCwr1bBFQd8RxbRVV3A5MGAvTsZSFCFsWLYvGAeQSZiLMd3nt9PfSjEQJwDXnVYYkB2pPJ",
  "key15": "554dyXXkwtdje473HU5qE3JaHja6g2iboQuLViVY2BVr1Dk1NjQczyzksobKazvFTT2DQWofzK4qvFhyLoVV721v",
  "key16": "B6yN5KpmqzCTfYFM5QcvG1xk7mKpZHgXRh2hnnCfRGYJYvTx6dhqHaX1GgwK516ccZz6zD1LoWjAq7mLt19BEV3",
  "key17": "3Je6RaLFDA3TJrpPdkCQHBJUjrjjwwovosisxEb9eYve3Z14vhD1SxDWq9K8ZHcn6Gn1wz2xqdRkiViZymoLSMCx",
  "key18": "2tjDSmX9zuUoY8dUYc7Vz9sAdGy37X65AT8nKZ3vzL6wQTqbQP6eqEYdV7UieEBStJwcjankFLuiBq8GjbigtRK4",
  "key19": "4TDZNPhGuiLx28qk1qa8uN358N4yZvnV9JVcqfz5jpXDCa1WEy8nvu62zSdWCcGrxTZZnZxr1qyfpmtZpNFA58ov",
  "key20": "58K1q5DtsPuTGiDRjRG5FEcoBmymKUj7sp61uCrt2YXAoba4VuPF8JDMuXGDRYBsy5hWiMVuoJ3io81r6SChBGBM",
  "key21": "5gG7N5uhtgDV5BNJsPgMvDoZwdTyTbdzeJABrggTfUVbLbYHeqE3HE1UNrzEaFthGFojgvbBfcd7fxzATYHnmT8i",
  "key22": "42hsXa8bfCWNGMA945HJJQRsLSrHbffZenEd9YzG5QshFpUEorGtXqUPcnE3fSwFD8tc1nSFwfv5pgStefAA5YYm",
  "key23": "5AUjUaN8tbwmqv772ASqFVNYgVybNkccqA7wwZkNL1fXv9bdVwQaZRpx4Da7oiQ1d6SxoTrtAkqkj9qrAWowFyJh",
  "key24": "4tQjYvqf3moebFcm3RzVYDGud6dDzAHVfRUzWybcvgj81WE3rGnFC9LacxqZjdDE2X7EMjAynp6XRXwGKWE8Bs6b",
  "key25": "3S9HtxpnSUyrYJGjQivfMLDYHNQpDbD4moaejGJfmhbjrDLGp237hh5NeHAw6T8LQfAxATydC82kS7zKzNX7jdTd",
  "key26": "2Eupak96BQcAyqfGab8GRG49wmi1fBGfYVBdC5nfXtWv4uCBtRMyxearNLcHp1YjM4Bfb8tEe1w2nxEf48Jdoeu8",
  "key27": "5TJtY6YfQkq4Z5QaVuQ4WCDb9zKK1UKzc6fn1CFhvuePniGM6jUa2zBTHzcWTZ2ELpCopSwFMqFa4j3SXADTGTQb",
  "key28": "2Djn1unr3UPWD78yVXAfErcdS6t3XTXWp62BMYtcq3w9kdmJKfdK2vgph2HqTKh8gwqZXFz339BYPrduVxa2x4od",
  "key29": "5VEiSzpMe2zqtDagWKATrEcvgJkDTKVNbALSFrSXAfSyrN8oXKzvL6BCHj675giQNm2SToUBdypvKpXoydxs5yY5",
  "key30": "3KQtXH3bnhCNgmkYmvwqXqFYZ3ibaUAVxgapaUua1trjaMxFjg8JG9RhCCZyzYfj89YR4etAq6x8aMpcNJCepX8M",
  "key31": "3czxPeBDS7tPjCLc3s1oHqg8Kts2tpxdCxWrJjGgHErP14ydXacCvXFr4iXe47wnPKiPhPhwVj6LsxYUdGfuFYji",
  "key32": "2XLT1SaAPWkVw5VWArpEpvv12G23hgEAkiAMqShdZFqSundPnKtY4T7BRVFo3d3uteqcUNJJgyGntzqXFkfiVqmB",
  "key33": "3mSE36EaoykKKr75KQf3zJ7v2Atks72R3rgreJc57v55jyzBv6AvqeUwNJnMDShmHht1gHRaRqkWwo7mmEvwZTcz",
  "key34": "MrneSRFDN6YQEHAiXCQCfePDScXunPCQhcg4JcVwwnZX2vzsJZrFX9tnxqAMj122p2sDMGSNb4YEkzNc6f9qN3r",
  "key35": "4NfvUg89Q7BnR1pzES7R9t3Z1vinUURoGvuD7mwVBixLfDa5hVdUQfrwSrPp56C2uBwQRZTKXtxj9WPdZQYJdbFk",
  "key36": "3D3ZBbbG1Eyoyi3WG4PcappsuErhYRLHRyK6umFyiqYH7MFgqkuasTe6UjpXs59BQTASsSvddj9t1shTFaD1qF8b",
  "key37": "sjnCiD6j68NwY4sbnwuLRRGsASNU28USDppeTgZc9h7fu9H8w5uZeEmM9akqUmcq2bRSHDPYz55nMjzyEoYNCGd",
  "key38": "3E6ZjLZYHZrUVy2enXPUfbZCZvQMatN2w2fZQJEc8GPuW915HLRtj5ezRCiDmKnLueQLxXTRW5rKHkr2KWVgA971",
  "key39": "54VN73wkJ9RTDfbLDmwUdtawhHqDmak75TpfJ9PdUcnoFkibyn27L15b73uobwSVnrLmg8FZRCAqp74w5XX2Kwie"
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
