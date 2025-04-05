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
    "5qbY18qvHNkUMia14LGBUCHGSjCCt8KHWs5y5r456Yy6zhHZ6VCogqqLuUoW9W8Jpreq1WiepYsgVvp72aDQqvp7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dUdYDjBQpfuNZh6YoiANpkCeF8T862ffW4HayC1g7gksSTnNDschX3ZnQaM8HHf1fDukPAXewYYxKhkj9DxZMh4",
  "key1": "4H89w5rGbcuJN83Uizd69MstZmQsKSjPDwEwiMqJrGKKXoPgFUPr2nH8zpBdEgXPA5G5BCqg2F2zVLzvUhKybgBc",
  "key2": "GafT6AXbBJmcEbaGQL5ptgzxMTYeWzpraAK925LwEMvoxQqkgLU4RWurdgSuhJVya43okRqN1isDGqGcR3kZntG",
  "key3": "5jEsS45MuqLFSjVc3wm8f2hniJ6K1ccYe45SRzJv4KyKHTTssKDY8Uuy8i4ESKTGtQc3WCdfnm4aqdnioiamiGMt",
  "key4": "5LQr4jkaY3MV9Ep7xPxjt1dyENompX8gnyRJxPuf34oZZQMuByz66i9jdoQpnuXxYVrK1p5BhbeHMakAk4GFMSYs",
  "key5": "5BS9VAwTwv73dWcNjmp9pSefE7bbwjLTezJhQE7RjD9tkJUCHTHFSFQPRSon2714YnMR8xZkkK9cxtggWv7bpeHE",
  "key6": "4gMiPjoqUyDv8mKYqroMfb63p38SXY7Xm6sNjZDcKjo6unXXVNxf7VQAeWpyj5uQEi4QqTkwLCSJsETQuJihix7d",
  "key7": "tfCCCMT7hfzdMJKzdr8i5uQBPvG4xvYkMswgDQCCwoJGtWvV6y51yXm3QkiJxVH3gDNqyn1TZStmDUXUKespuGv",
  "key8": "4kFDcfSN9JpQWgASfAf2aeQ2VfvmtmkqhNnP8okg1pzH29oV1epyGEWumPWi13iT9SUqyk1JbiKf4X8Lo15YGQQL",
  "key9": "4M6xCCXiQXdrKSdQgFFcPrHUXB5J34qYWCyjZdfeWdAR9CQNQs9Bkw9Wdta4vSuj2RK1978egkgh68s1Nx8KK4Wi",
  "key10": "r7nrCNCUhv7kTthj9qqebZGyPvN6rqjT5zcrLoSbFrxnY2mi6DZXCwF3GHQrTySfMcWhfuV3XcRV8LG1aPQkAuk",
  "key11": "2PECygkuD8UURaMntaZcyDctkyXUtiyaHJRTkbLKtxDFcj1WnFqpnYJBJAMz7X45xS4Lq8nQRR96JP12ECfyWPAU",
  "key12": "45Vsm7xhRRFtXdELDGP96QGdwZJWVg7fPNobV3mWo8RxLabffGrjfsGuJ1rkEm64po13pJgzARD6vb3WapsUfYsV",
  "key13": "3rRu3uqfDvvwWg8wmt1gkpJuCTzrunCAB1T9EoMd6WGBMLBHszjPfGc1iUPU5ZZZWEiWRbLjN85aXG1TtfeRuTAx",
  "key14": "3fitWjRVAUuH2puans4fcDQfJRWBKP8oh3YSSLnAH8t3zPffcNP4PNsqBgt1JhyDQf6fbEB7ryKpfBgiQiKdZE3r",
  "key15": "X7UKo68yVuvcvcjCEK5cnonnLnRz9gCsTiGXCPmKvgWijEcbyRVMAhLCZ1aYXsyZPm17M8egN1FF7qTbg6CYMR2",
  "key16": "3Y2cHX1XpuCZKSGi3AfwY8jZRRZeCmUjyT49atBfsEmhGneQVwBPiwM9PqWvfBWg6svtASxgEyByu1GW9x5bLwBj",
  "key17": "3xwhkPzQhyShFxtaZZyB2oZgMr7VigBAdrHdX1LioVRmT9isvBqei28fBwFmBDz1eHNdfgQkpWb3pUrPzMu1bRzf",
  "key18": "5w3XHj94VD3yoJXrgoLZDyvJEGXJdzDRmzHq4EjrK9kgXpHhAXuUy5iNWv4tpXBwjwdwvffZttiyuJHpoEaK9iQr",
  "key19": "2VtsUu9XFLioP32AQDhVoVSyCqizwX1XWdwpFXMfMkXWttSLKpSxkGV9opQrU5tGCDj3rxhVem6emxtPTQzTsg8e",
  "key20": "672RFX4kruEKfhqCsq3t5bo47xMMrzngG7UaTXGcbupDioGcCHBuarXRbEjBXrWGwMXqFTmy1MRpFQbP1VRmWqfZ",
  "key21": "5vb8LCLqEv1XoRyCcwkqsqppyiqYm8fD5VLzYXE1Z2qjYeWq6FMps2xuyHxKm2U8SrNQobBB2TFjTnUrWXNhkHwE",
  "key22": "52EMbsyje57K64QdYtR5xAsD4jAUFGkhdoQjzMb6htu6P3kCiYEcv7jxPTjnNzbw2L1yuAyJBScrf7uj1f3nL5Rv",
  "key23": "3Gf23uhWQxFmUFN2Vmy28UAB8cfzCKqsvzzbymi5ADuTF4fALLryFWdjiHZduojqc1GuxcFq9VTWLXSbwZp6Ld6n",
  "key24": "2gJkLCVRJDEbN3XFiF54gC3DvEky5T5Yyy8FHRHSiBfJLgt9Hr2nBRV5jbwjuAHSwjWVpwxFkzoM8RviHjoNexxt",
  "key25": "4JGKyCeEzhQCHmdvTcdaERsXgEgT7AUktwCQJQETaz15Q2FR5Tzt1NfsN4uJ3owwFWYWC2FdMnSxncYKqrqFqEX5",
  "key26": "rfhqBbwvbt18Q1U2dWbEHpwMx3ASjV5K75B6ir9jkFDCrT1m37iY4LgFHBV1znoBZpGLUJ7TKB7DbsSiB1G9X4r",
  "key27": "4F7ubuYX5pR6u6fD6ZSP821xcYSgxSwZgzV9QCZdy6fgvHJgcKLWMyQizoj6p31VJR8zETjCgmb4CwC7Eo6nvxmu",
  "key28": "2gD84Cxg9Qv1B3kVvXjaK9jn47BAJha6mVB2evbHxwcg4mdhAjHrmLuksnQPuL9YAdPRdPwRvwqesVDSJRCfsk6f",
  "key29": "4AwxAtvBdhDkfcWJGTWx9AiFhAqZ9TFchUpbXtVK99aKG6HCVpFSECuGv2xPteoMMgDgbLWLLDApJhU8REYjUAiV",
  "key30": "UZyVYi37hJeM2R3tdFqgjDVc1JRs4XQ21855UsbxpjARyCt1aEbAkmCRBFcrzTgynEFptTZ25W4KVa5Uincx7kx",
  "key31": "5B4bQvuETKRqTztQ2s49997X7FzhzWTcfvsyBDFtPymZUJBR2P4aLHjGn7CCSN5oYYPmsLPywGK7Wg91oeg7pdg9",
  "key32": "2KjQivSjH3EvmcBfgihETs1MEQY3Kb3p8PbPBmExNVmx6r1NtyQeyjERfF8bHuC84t5MWSsuqDMPpHL34MEkNZ7z",
  "key33": "2kQVWiRcvkxBexvW5SaMZ124Mv57UA435bXPGQr7Mdv6aYAH3XJgLc8XwjuYsF3qHwvByzaEBr5WQMrW5GAWUFqo",
  "key34": "5J97JRAs9CAZQejSL49cXMj9A9AenFoeTwWSFrmszcSu1LZ8fduLdVsvnnyi6Jt1gauuLyuaJh9ies9B4aG1WtNb",
  "key35": "5Eq6XEwgHG67u5nEHXATe7bt5SW43vbGcGkYyk7SGmZLMTUQQMKZQDxWMdS9EfaU4i8z4RTT7aVQ2agMniykzz9",
  "key36": "ynHDDkeyUnF7APCqPsL9GmwsVUH4v3Mq8LkD9gxH2e1NvVNQGyRCFwnPZnePgpc4341ND1n89vQ1FD15PKmeX2v",
  "key37": "6iVbygVcdp4SQt4KH9NDmADw5DNFSkQG4Kpesm4csSq2WvUFdBbyVZ3a4W84yBS3bZUGsUnyx1d6DPsUJNbHSfD",
  "key38": "5YYarNmJLYXxsvRMymFBFWBhzkJdQnBTYpyLzQjicBmYKPNs68amp1yKaGgitRGmyQGDGoVCwYwVUS3yxm4W72D4",
  "key39": "5WceAAKWQPbrkdmAc4D6BZYqPc4ZW7GA23hyDR65FbZKvjpEoBf5HrtfJ1XBChJE6WLeLqWvZ29XfUHmF41xA8oe",
  "key40": "4oFoEVNmhLAvRC5JcrEEXzjmbAz3vs49kqk28svBNo7bWZGW3LFeQ5GFGbiAMWoLX43789Gkr6iYP26W31QbstRp",
  "key41": "6mSmWGuXeuVSb1DasbLKznuxrH6GJWsj6U3yEYw2ao12W7p1NaGwkMKogKCxhckSN2En7NCWPjhuYmCEzgibasn",
  "key42": "4Ya26mXCL5fGcse2f3Dsvp8o5bU8ZT3oKvJPUemGdCacbhrBQz6Lx9Poq8p4hRQLcAXxCXzBLtHZDV3XNpCmFvMJ",
  "key43": "2eCF4XRqsJpa17VjbmsnXrXfpF4qkRd5H9NVtRazDxXK595M4neaRzLDhu4XmgZAjk29GCjoG5TC8fxHrcdcwzCs",
  "key44": "5aB6n5L9BevYaQrWkigUyTfKnVN7G1x6mL3iX9mCt9tZ7sr4eScP51JYc69H4vwoduGpRhvuCjQ3diJzQYZheG22",
  "key45": "4PuM6CZKiWb2qGL68RvsDRjGYymgPyhmKrEuHBjZNWHAkBRA13XA1gS8mZi875UH9EB9vBhYLQowd7Tcd3T7NnoS",
  "key46": "eYguERbBiRhyufb2Ayq7cBNBywKzF8GpnqAkgwBEvcxWSNkY5LHshdPyCKxkHu3szoMbUfmMzBebcUQ19uHdofq",
  "key47": "3DrJLTkUhZCtY8F2v2k5JADrmT19QffYgALFSxQt93M4ghzPEmLxekJNFz5CCJ8NMWrcdztWoUonEE6ZHgfwa4AX",
  "key48": "3eFvjU75H3UvaG9Yv2hNdU7FvxM3UhFQMPr1A9ijSenhQqRELCwySwqxn8vRw7wFV5fhv5WL9Sk5Rh4LKUAvYynG",
  "key49": "2MED6sXfqGzuGvKajj63nKJ133GS3yGJJhGwj36sxEV4r4y5D9B2gNEpp96PYZkLmQhEeRLW2hCaCV9hSib6H15S"
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
