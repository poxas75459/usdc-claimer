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
    "1cin9A1C7tco7ZJwFB784sAjPi3RkSoKn3a4v7Tkhaq5mii3yzrkoTQQ7B71Pv8UTQQda4GqfTUpDKjEtkv3VrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5W3fzJfpYC9Xyx1nRRrbHW2FD8eRF9eDESYyd8wM21a7Ss31CFUMxGWRDqi8eRLGmzG8aVsnHopjrZkPjKS93kMm",
  "key1": "5JFAe4f1Z68Z8y4ZhzdmmgisVawXdGmPBXGR8fA9UErvdUH8XirtxR46zs2pyBPGLnTtixXezKxf5GZHDXPCnhc7",
  "key2": "3dPSX37khLy7YwiPRJggknsJ8ZNStptQiqqntqKwdFLtGVJ7Qop9LFwAGZuwrHYmf44f7bSp9FqYEA6bQp1ET12r",
  "key3": "5z7N7u9thhPkKY9wVRRR8TnC7hkwtnvP64jgKgAWPqqWD4zJebt3eTDEDZAM26RJDYESqQjaZyYVarxQMQEz4ubg",
  "key4": "3ukcv96sA8P5FH4iHMTB93vrBHHmPEqCG4dxWQcf6vgzgmdeqbJZEhKgxKWYJuMLshwcRNuG5VdKUhr1A51X1ki9",
  "key5": "2KyL6mqdZMhkzLMvJvidaC8w885BKbyvDBLNGkEMQjErLxqUQcwreMpZLUJxHLKpWJVMLAi3cK9XGBC62LWFvpcW",
  "key6": "5kYaWwF5Z1CG9NTzACmjRyUtEYmo9Z5qGxW2aDTpGpLELy35hCi1znLcLcFcNiXt9GCo5ZLX7SZJ2qRtt3EXA2D9",
  "key7": "5J1r4MVgRNecLQSd7vYxegsi9JnXDuJfdAtL55kbW44EwcG88c8PUir56JqY3ixXnPLxrv3XS1WhVmASUhdHe81R",
  "key8": "51PEFVbbNZjkn46Jjyp4fKojJjzhxjQrSGdGU8Uu8mvUnfP4f296nyQistEi9oK6142dke64FsCpvWpdTNZ1sXeo",
  "key9": "4nJt5cVvHejucHj7TQ2igVQjMokdWL5GmP6Na94Cr3UByySkupYRCwPp3B6T6bN1fZeYbswe7s2yLqjec1ieB21v",
  "key10": "xfCNUnXv6iEk5eKYwiUKUc4qMU5NozDmWa8bZ3eQ9rh74qqAaQBMWNquA66AJUMdibxzWHNsapXvBApYhE82EVT",
  "key11": "qsL5Sv9fVb134aHEhvVVRDdpSCqVqykAndHKu7hSUfVwmuThs1k2ZyhDVCW7MiFXTyXm84dFgXMn6kpJTCqryf7",
  "key12": "4hwczXJteDRhH1GMCGwHLpZRm8imijkEfYb2v8wooSKARY8g4vfDDWAj4oR2srsK3VgytexXWDPn9DtaxufeXpX6",
  "key13": "4MRabrNovQqa1Zw9N3BGWtUcapo7aSVfWKXw7qT9r2NEHBhMnFBswEr8TVwj6xsmaTp21rS2H3s5hTPDHKj62iR8",
  "key14": "4W42dGMmk7EgSHgNqp2EPhACnzWiCgw5bnDvwxTxVT2oRKbF8agRtZgt3VzXmZvaMmBnuvUTBMM9cFWaaJSkVJi5",
  "key15": "goXXWWp2Rj2VmVeS3ZpSrmTimi8Z35xCUJiKQXDktoR7pcJtP9CDiSaGXpj6DortHqtu5RBdvH365XLiq1TRRYx",
  "key16": "4PpgteqApVo5Cx5Wr2DvfNToeA5WLAsD8vVgJU2gx222uhqvNg95m5zzZLhcgkxSpvEEvisoJhEbsMZVSU1w21eG",
  "key17": "2kD8Yjnp91ygxosK7DqYjnthwBKfdbpTABndJnpa3roKGhXCSTJPvbxtpVAbaeQNmjQygQ2j5GeDKFhjbYw2r5gY",
  "key18": "2GGz2VqAUfU6DMWzcUo9oQ7NQwzuZk3RpRrLre213oMxewAMQ648xf1Ca4JLGuz88FJYrZRhFEjyy7ic2j6XHZZh",
  "key19": "3sX3WJnSeXm4MeLxa46zFBQXwtA2L4RVNVsPBaai4ZFL2ZQK6hSAnvh8qyjRxpnApQtJPFRM8yaqMpz9iDa3LsLh",
  "key20": "318s8yqqcF6yYpX6vemf7JmThEAALUV7axNrXfzDAFVVQQp6VdSQKXBGxUh1c1uSEw1jWNs4WSQJn8c3AqtQQDPF",
  "key21": "24x5cz7HjK1ASStrHTH8HVh4GtrJgPNK371XMJ426q9j2UFHWg2pd3BwdT8Cks3YFdnHhm1mAqF8k3VYb6BtnXVN",
  "key22": "5uyJqMwCHSu2VzzgJQcDtNLd2VsDZTUM9Ncceq6NpuBHWANo3J7Nz7oPBUG2BeeMXEsTDH9YfGFfc9AzUdkrXMvW",
  "key23": "92jXUsow3S37HtNsfBpuKbeX7J5hUCYt23xAh35xjSyzcXXSVQYBSs31KPjWT1YVs3kuZNyYDyCKMjrMcLXJUhB",
  "key24": "21BDtgvKy6dF8XhraqoZgtHMze3uNru5meKgM41dU3ysRtWgNbaG4ryADY22NL9hKy94dTJ2PyHAkR2fnrQVGN6M",
  "key25": "3BVcTzQDyhqLYNptxfAhtYxJ5WppoMv9zAEVDrQY8V93kpsv8ZA1GXCPja2TqwY1T7obsYjRs99V75tydidD4NFi",
  "key26": "4CkiMn3ZnEusPU2QmaGjod7aEo4vudF1iRQWgnVfM6P5YhXpmpnFdECmVcZCJcJNL37e2hgifGuKX4MVTPKYRQfF",
  "key27": "2KS31vwBp397efmtvZBEbu2EURpUdVscQBVS8dqAwmcZGhWSc8vnpUzTSrodfKZ9X4ZxHy2ub93xcKhLVqNriQok",
  "key28": "4FaVpHAMnt7apnpZpXMr3KCnaujnTQJ5WV58R56FtHPyNhMj5g9Rzg9jWmtiSmCLtmn3qcxWo1t725WCaAWCM9HQ",
  "key29": "L45abQWpD6dropa6EmbG3ouL7PFxu9BAK682N3nypV7m12HoJdav8jSG7MsSW5HuH63eLnFDWunFGjCDuDiV369",
  "key30": "5L3m1K8bnJ2xVKzcbMcNxuX4dXq3eetfj2KQ9ZWi2KchNzGev6kwUNsmACTkcHnMiKWgQTV1zBnkJuDWk3XKjDRX",
  "key31": "5yjkS33ErDxTsdMuhEjw8W4nZTXUJWs7WWrkuLeyRREhnxEappgdHcPLLMsrprZkbrVSTCNiWYcu6aedh2DWazd",
  "key32": "65F7uPxUPPcS61VxePRZx2X9EWtXgVZumwKPuE9knQGrAsYWcZCXPx4K5bFx8HxXo4rMkWCQ15eZvxYdeQ6uAJZX",
  "key33": "3VCxQK4s4oqj6QaKVd7Qbfh6tCp6Ay24XKWU98KnyKoY2AhxmnoABNZoyafq5M7pSc6ZGeJJ4DKzp8nsVvXVVaJ7",
  "key34": "HqoL5g7899QWqyyo3yRpVJRaFh95YSNQVZhBHLEk9n9dsNmfnXQfeUJYJNQa1u4XSqeLHCcStJ7MDQqpJ4tiqW8",
  "key35": "4atDSuFTBamwaSvt5LEE2GC2TSJjbWSSSkUXZRa3w3Bozikj5k2Yf6zmQzFHD8VGAyukSbr7LbWZGZxrtcc2C8ac",
  "key36": "2GhtDbVjdDYuM7RqV6V1dpmDnEKgRXbSv22EsBy7DVZ95u1LFKCesLiegS5MTPgmcJpZ8R7CYuV9i1iRByqxEqxN",
  "key37": "5z1yV2mssvdjCHfQgZwDkgPVB14QXNp95uWihb6ZYbb822ynv8EWKVRb3mcJBgZYehFmh1CLnn4A1u4r6kZRrSma",
  "key38": "272vswJKtiHUQzgpFACXRFneJveBMc67RxNSuEDDHfF2pfoQe44fzCxwdYnUzqMapcnEMa9oKCbMsJeY52QQ7xsk",
  "key39": "5ijJetbSGristQYZZBDA4TjUCX4f5kmKGWGt1fmfejjwkCrHABSXNEgVYAqDDuzFx78Em9t2n6UZzg2bwkNWVNKe",
  "key40": "4cResHSZUU3DENpJYHVL5VL5LQKUroNj4UNZGBZmHpxVjmRVoMTneWEKG1jsBDTXqL5NxRk2K4iBULCH2TSZLddK",
  "key41": "4GEXFE6uu6TAYidamrG481cBK62L8yz1x68cTDBFGU8qBNeuAtsAaFTMZFkykVPmUwPXMKhbpWCTQU4nny5CDcac",
  "key42": "3ALCSxtHWgDTikLNWc74xaMigViPEgpZBcBmLVT7R8o1UkgickWJUMpwjSajEN78C4bXfzC11BsZFeLkLPbDX751",
  "key43": "4xVooDVicFDMyKNrvx95GSRdRkKQK1Q8XLrsgqZ2TizEJN6EjwCkuVoNr1xst2FyAVAnK5riv7h6wmfTkahRjhEj",
  "key44": "3ENjvvmCTPG2QdDuKxfitTNquFAM5TUtxZPviQu6QY2c4zV2FYwfDXZjGFEs8Frrt2NjpWkn4TPpdQYGETf2gN7z"
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
