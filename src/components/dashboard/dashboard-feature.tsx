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
    "2Va5j6fH5ApEkQHhtX8kwEcNRGbAmRHWp1ohURqxSrpzKcLdQ7Zk2byzxndXMXtXqKQgVKEUr1pZnDT9GyY7xvvL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Cprwugb6n5wbx8encs9aCzPTZnAxobeHjX8A2toRoeWv8VBVYpQ9zpwMo72ox773ShKDgXGJDswyMuW7KEQy4Js",
  "key1": "2Pq5aCdEh4XJG7C8sw7QcpUggVnbpQUzb22QJKGG5hrgULyfsvWEzH1PWREXnCfUscXeog1Mq5GLnuBTVJ66377q",
  "key2": "52FhsdagS6sCqHX9t6HHtWNGgvo2ViQ29g3iwbNqYsY8AgWD9HcpobEjguMXHoZD33ZUgTJr3zrR2fUqKfMdLCrC",
  "key3": "5hKPvJT3jm5ATwPevvN7db8DjauFwkYhgpioYxRG5FsiijnRecKcRdfMLfxhAhjoLDr8rB5kUWUPTUjxJXEcvoK8",
  "key4": "31JQk4xEo8T1tjfgcSAnciTtoEZKcWCj9pwvKiKyoii8aPVftCzPm4wc3FnQtBRMKFVcbpRzBedww8csFh8LfmNo",
  "key5": "zX4EHTvW9Z4BGbNzKKykAV8c4NDeXPTjjaAhQMYxM27wmgfGX1ME5vbRo6btRHjptzGbHv1g6nCGRHgZcQSvuzo",
  "key6": "zixFmvJbXAFPCWDtfjw5SxgDDjJgmJTMdmRqSX9FygXHmhTr62YEgJM6yvk72Gf1fcS2q5whbLYegkidQCpiQ5b",
  "key7": "4y3MWP7TpQoNaM42t8cH669rYcZ5cJQnw6VmuHQH1rC9aj1DaJjGwSSUB6Mgi9vXAo5bmWTjEdNsd4FdjmcZb93N",
  "key8": "Avkxd9nvuYCpV1YBhy9aqGZfLuyARKtaqSDH3b9zEgnot9G7J8zMgLPFZDUpRAKq9CXzbgZ1d3uAjYsJote1giy",
  "key9": "2wZx2tJNxpEVHK9hV2iNEjxgahq2phQNvzKj38PWeSfJjF4ETV354gVnZqhiDsmSV9iwHLURXNRfC1rA6SEnJKxZ",
  "key10": "2H3st3Ncb6SzfZ6MaX5pyaQfDeUTM845RQSxVwk47y3mYp5toBpLWRDmUJ7evcKZGP4XetwMDaHAUoYBMHTyBoKG",
  "key11": "5J4Vft4hTBim1mj79dU1F8aZCAPTdRNo8jJnykNT78ARib9KUhkdSDkDQxVxNbTFwCWdDoyYCv3htXuZiPaSTUgB",
  "key12": "2bAXGf2FfHRGvVRRmnwMhLZtZgqd17X4vFuqR7FSFUsJXe4dvok4m8siaHv4387argto3EUimh4YF1YRuvDmrEP1",
  "key13": "5EdJJ9H3YfVbrS7TGC9UJmfzkfjWXSXyx8gjYKDq4jPdDuARCGGnsAr7c7y57UxDJXDkSD4g6auLAN9krFCujquW",
  "key14": "5mSPgDBcocQykRPHdgdsw85bhAh3evKBeyhmuBnsFpY1ZJbM6fJuRJSSXYP2fus6XpwuxWAwjGkQfWUpt2fdSL1Z",
  "key15": "yjnTd3mVLSFSjAoMPXTJQiRXofNJ5xbMR9F34VwGzDNqMAQNGUAxK1rkhJ161oSYtWjxqKvVwW7YHJq7nQNbHFV",
  "key16": "4TKLd7iM9CqZSnbMGSPfo9H9vGP3ywbKjWt1X5urx5XWXX9Fi5QUBYETnmT8QAT9g9P4enmJRYKdyFhFvBc95SiG",
  "key17": "3YHuw9YyZvZHX6GL55reAhNAsayT1XNoiYLHeHjddpAkP3TUN2gwD8jr286tDjKVZLZwNkd37mdec3MsiLbKK7d",
  "key18": "2QfQ8DiiP4xjzZzwBAp3sisAHaCvTahhcivDofoqKHiMjkSRAMpE4mduh1dwdgZpePNsktKtenZQDHJLGCqNYyM8",
  "key19": "4Xpnkbo2rQzhZAFXKfyNueFHAqcsS2dygkwoPCPsKYJ6rPFoiE1qm5xKfNrLDwtZ6gR4ne3fRJreF2EdxHjBnujr",
  "key20": "4FQhMbYkYkWsCBffhqbRyHDmnHX4PvpTSDtzFQVxQy8Jbtg49rNStLQqWkLQdSdBvhZjXx4EeDZpkcR6Q4dtpoWu",
  "key21": "2bSrRwccnfFNDx4YV3FSqyQoBCQqofZNPWDujTnhXc8GkE61HwBcwu4zZKJVRZSpASD9te8WmsEgREuHuniBQj86",
  "key22": "4ijHfDb7cSX8ydrssYt9saBu4Yjg5f9UQPNLUtUD2DvfsuqUcEq2vgVBpa2bn7RpoLNvFywNrT7c42CRMBKbNUbB",
  "key23": "4bV431kZGH58VG2NrSsdKTu3pdRJvivXyydxC1qEmgfTK8ZobK1xfUp9t8wrsiabMManrRXWPmpu6HTSoXFb8naQ",
  "key24": "3LGhYD5vCMMhRzkgJ6iZuEvWknUDTvW9rrWUPjak3iHLPDmjFT8BydixQthSoYb7CaFGGLWdqyTvTVj1PYXySrRk",
  "key25": "215hrxoYf3aMjQK9kJ4FLe4rffyrU657AkgYPmBruMVaLiypfY9EoKPDm3wKV375qUjVuV2swFJmXKgg78uuT8D1",
  "key26": "5rwnyRCJt3kWCeLtZBWd7Sy8QdD3h1JfWHj2eDoDYEzF81HhLsSN9FSJH63Da85G4QXMU9XP6nkeyauSbYTJNHnv",
  "key27": "5WbZyB3cZMzfXvXahqc3MuHZpWsvmtAj4Z8DupwHDGq54pSAC8vVahbB85cxvsFrhuddD2uAssZJxUchvKMBGqDv",
  "key28": "DXo2m92dnCdNz4KooKkAZyHwx1NEPrxUjjjyqXPoH4AkzAGwSHfjm3UnMwKY6PnEA6sBatpw8Rm5BdNmKybwVPq",
  "key29": "d2Hu9W8F44YZ35KHxWtEVf6yRpz5rAhKESKs2NrhFBDhjPEgbnFQLVBzgLypNtSdQ1YuNwA8NWDbe48ETUryp7G",
  "key30": "5Netwwb8PmwZaTxDgNxJDxkiqyXPfS4D9iMHKHzpTD4wGAf7vg9GrvHhwNBgK8N5bX1jKK5aB5rQYGBhdEfnjfLA",
  "key31": "3atHYAhMxk6wLmGRA5q3Sp1JphjyBWGmKDWc2ksAv3vK1GGccRmYHnXa8zouChAUG4gHUFHMZA3mTVbFQACWRFth",
  "key32": "4Foxa5oCHSgHGLDuzbEcWaXEWkXV1Cj4Y8GVPNnH1355w8zZtyvVGFdt1Kj9uNPrUR2b5K8eVrGFkCa6akhyu95i",
  "key33": "4vMioE8tq3cFHw5YqZ7QEQZKtJJb9FRkUg4kCDcF8EJzW5AckD3yp6TZCw3Vznxg3DqCmTB72ZLDCLYGME1zy83B",
  "key34": "4oPdcEUsYMtj5aWYQfLW1oZJbxaSjZBSoVWzF5AiYERBwzXb8bPun7zSFbYNocSVNTTMi7P8ZgSkuhyQ8ZFj8xpz",
  "key35": "42v3Ycq7hmxvLazb8HGyNaTEw68nxEuKQT8FwZgCa578GgiMEn7Y8nXCU9dYN3mcikik81ohFtd267i45dZupbzh",
  "key36": "2qvp97usvWAiHXJE2AMDf1oLvPJYHBd47y1rPFYwCFAtKEARs5qXguYxtSZRCYFRreMfuVb39xFwZ5QYuYbw4vsa",
  "key37": "gDtrrALYimLSeQRn9BPmQUYtRDJp3erGVd6MDK2BwwQXu5vU2v86jkR77xy4QyNroePZMSkRCTnKPsCnviijSCX",
  "key38": "4J7xZ9vj77zpuvxMRy67DggTddwXYwPyLKuci8DXo1niMyd2oCtdoaUXt5rv6WoBfSxXrGcwScLbwoScRcZWnPFy",
  "key39": "4mH5GCBpDxifbHSMMQAM1oir2qkkwiiuHwjS8d7VWZnWuRoxTUVVQWt8KPXxf1ZRpBnmqtFxvDki49PUrDYzXjtM",
  "key40": "2SHpxiYCoP43tctzhVpChZ4MR2HE36CbGky2wZretgQGM1jAsjoFBHV6dNzWLhMd3CzyY1mJXbjXbNBaCTHAKFjs",
  "key41": "ZbSqsfJLyRVKoMpfWo9xL1pGV6ZEHyvrLJP3nq3Mw7HwjJwAZwYL2WdiR58ZcQbhR8qtFrvi2PiZsNF3geoRagF",
  "key42": "5938y4TeJd2Wbkv5VJEriWhAVYLQet3hAdRHBcdH4gn6G5cET5maXmoKdoF46Wd2Zb2e3qWsgeAMs7DCWXXqFYMg",
  "key43": "26w5X81uXaUHj3GP7Uq5E2SyXS8pUoz29Ri11YWudqnQhxuvw4c6NzWUwmMWjxCvYfX7JZohZ6NxUBvmSG6FYzdH",
  "key44": "1S6KD13RYQT5LHwBeFEkcGtt2tB5dDs3oEAAo5k3qqHuPai29wySLJt2H867e7WXbzmBj15QHyZiDKNDtmTjMre",
  "key45": "5hD8TeSRF8XXKXx4TGgvRSoPTpAwmEdGW9KZ7wQ32xhgp3UuC96iPALu7zuZu7HpefapRYkqDPVKBjxz1wLeRAu4",
  "key46": "2Xr8o2FM7kLFm2VYQeRxL4Ps8h29yuV6wtYGrxZe4RUuWHcqZ8o6ryXYPdT1R6QDPEgqEZjQLMYY14pvrqRnE9eS"
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
