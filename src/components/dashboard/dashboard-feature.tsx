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
    "3FXH8W6V6AUo1eamFWyaErGZMnU8ZrMRxX6AsKSYmfwj4WdD1EbFTsVEkc5haPUXFoSTLDVXiqBpULRtQCHE6f99"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sPXMKRrXQ23d75ntThn7H57CEEzgSfgYkC4GSMBKCBjQzu9kBDZBXpjkfVMD9TqkCeUHCw3mQFwNGwJCjLHAsmV",
  "key1": "3yvf7XVfXzKazcmDYWTXcfCGwHzRddg8z3WBynNo4ubp9dLPGgqxTuE9BgJ9ScQZy7aahJj5t6U529z2UqWnLeJP",
  "key2": "2LswLaEU1E9uYbkVjTrBdnwWnZsBTLoR9oWsMF7xnpr5SeVRtknptnhKkwK7eEyWRzo9iFqgKB3hkcpXC24CMdUb",
  "key3": "DoUKeb337bxQwgVtkwPBwpdTW1X6fuPJKshoQN1c7whcb2jYPiwYRJgF9uX5y5xHW4HGjFPbsgPza11Sk7m89Bq",
  "key4": "3QujFwkEDeGLNTjyWHRnvutn2Pc2skkzRLMxd7UKTUCmFX8p3gVe2QbHKCqdKQft87kUueQPaQFZcYbC3eGgNkT",
  "key5": "T6Cad6Lwdnoot64oqFRRKpU6v2FyyLupheoCN6ETHawsoRt8LQXiGGJvD5qEHpXWMxXw8zA7NMamRXuB978Hik1",
  "key6": "2SCzqbe8K3nmz4BMtj4uKvSSxoKahCWskneM7Jr89d9r59nHsZ24t8EiuaBa7hGJd2oEgfLGQwAaAxDPMQqEGAVa",
  "key7": "4UnSCfNK5pB74XYuECLF2vBupp4dAh1uxWcfcQFXqGk8EGraDboVoat19BG3TogKYFpkEY8JaPymtRdWcqvpjnCj",
  "key8": "4Ftk1h5Qkdkcc3xJ7qjzGiXLLjBi38n6BDxJATpaWrgPEiWoSDqQDCFzMUEQC6BXe6tJsEocz4Twop1YtWszzFD2",
  "key9": "UUANPFThT28WUiCvTg1PQrDnNnNCW3bAs5M4oSA2JxMZcXw7n1LBzFsN2z72K18gmgimiVFhMrWMV9LhxgMwty5",
  "key10": "22GxKXqRdp1kM2DVkCPPtke85fRBd3D7DtDXbTXS9P6ivmQwV4GZPoJtdjjY5RrNWpxhQk7hX4CtkhZuU5zzUUFg",
  "key11": "41Bc4mLMmCSk4WDarYDzgo2Sm7347WV18VRPYM4ztmpFcz1sg3MFpR95aXtNGBPB9iCyP6gQsM5nudgSdQ3aKWW",
  "key12": "5yWDPbv3qBn5VyELcqnd5mk1rVywSD7YNtiMPBFYveeD1hhjnQH7M4UbQg7rmfkWpPfAgh667emFwsH7qqRSTW5Q",
  "key13": "5iViAmNqfAdQTPNw7s6GAkz7fzUKszhDHrsFy6Ss8HWbtLGZ5AnHhvgcKAbKboUHsUXaQgpB82jHT5yn5DoEn6Be",
  "key14": "4SEhrMuY19rFvtMjhPkahRYgYE1URaymzF7DrrCaMmBxDGBRKWhQ23f4Rdc6tkttfgnYhAyTe4SV2swF5pnNkHSp",
  "key15": "2fJJVZHYLAynJNt7RmXGt8p832yUKZaPpW9y5A8F5zJkr2z862wEaEBWwMBqtcr6dJkvkEbKCnX76Qrv2Lt9oz5T",
  "key16": "2J2WoT7zJzhdXavkCahxEk4VyTsgjAMwDZAL2waSEGaTHF4vHqDC2HtH7E6CHEZiUTgS4X1K9uTTZBuYLQo2kiCm",
  "key17": "2QEsyXctjzx416H4YAqnTs1JGWeqpAxMbgVtyBDpYNa97ez7i5i4S9K7bBRJGQnPAZWnwf1tr34kvxhKwPBcwhTk",
  "key18": "5qhUVwP6Mw7mfo5BudzKnsr28ynV6BFyemjgnsjrWm3J1Fo6N1afnwBZGh4U6DTJHC3WkRFLLDJ2wkRmqcjKECPa",
  "key19": "4CPgdoySewAzuvZAf5Ng4ChcFCAvKpzUjLpiSFQmvgUhguZ2DYyDtnxawjTAc8mq5fDGkMoRR6saDx8w4GARn5P3",
  "key20": "sLA69anUVCuuBgaP2q7qSaXM5Y2irMttRbSU4KLTbFzAGUgTpjyAy9uzvQzo5ki6LpWWvx3xLVVyCfaqZEZvBcS",
  "key21": "4x1KgxRrXMUP4n6oJDrVpVZnv5963PAqUcHfrfoMsCtPxbDcBGJs75XnQpUWFn7e8gjLDz1VXBPMnDTnijcH8Xeh",
  "key22": "3KY4ckwJ5HMAtEC1GmiVzfHZGNNF8E778NZ6sLKWPdiJ3hcz5EvEqQVZn28N6Uu7RyJoNaBxdoyoDN4vqVNnGvGp",
  "key23": "44HRTQUH3Td4k4B1Kkthx4i6CfwhgrTRwCNKubqycL8XaTohPqz57tHapuhuUd3AyQfjmEN1sQF9TxnTf9spp4r1",
  "key24": "4N3YD9EAEmVm2N6aJUZ3y52AMXwfTTkdZdUhHY9Mv3iDXCKEwaZnuhcEBh8LjB7i26ZCEAsv1GzWpCxXHmncu5nn",
  "key25": "2i3Lhp5MdG6jLGrHneXxSTERsxDPwe9JS3axLripQkGRaz2mx8F8za89KcouSziDSEvYzkimeRXrYm53NTZuRJD5",
  "key26": "3fbFq4xesmJe2ao64yZ5vw3cfbpUCECjEej4VQeXvBVYLKFHPpozh2mgdhThBBv8UCWGa977Q94t7Cdm5MrGhdsH",
  "key27": "2xYZKc4fiR7zeC5NCzZx9xykddbQaxWGz7XMBGitPjSEp7Md2cD8RiQ5rYHaxhrf8oEWJe4PMvRVkk1WTDhQWD4z",
  "key28": "21mmgWpestQEg5Zn8KAFLf1HvaVPBMwioPTrxsgY3E3mtCFSh58EBTC6rggKvtkPGFj6tokbXw5JVKzsWBvNymWZ",
  "key29": "5FnmG3jAtd58svAZut2KfyDPmR5XsNBUYPKkqvd62ZGKHibGyFQ4e1Tyr2Wp14wGfKLoBonauqxoqbb7Hn2V3HbE",
  "key30": "5vhYAtPAFMKobW4WX6xKnrsfavGnfZg7Ba6udHxfHucjUtHVhbvGh3jwbsSimyehWciigtkkCg8io4TwdGErkjpj",
  "key31": "5yZHU2nNA3toM2HtBMdjCg3cj9Btp93CU99sd4aWJP6eMXpPKDKm8EyCxeBVVvqqtqDrkaege2GHMEWBNk8EYMiL",
  "key32": "FghgfmfZZUqjox9dpcim7arXcUKrNkhtyj5wDoD1x8gfUVJZ3Wv7ffgz4pFujWGReRCCeuVW1ee7SV3eC4R2EUv",
  "key33": "5ycK9EdGn4dLLgiu9b3bNurghZpuahBCeZnnN6BjQ4RPkk97MBBfQiGYTtr7dNPW1EPcbt9hmciM8pTj4E1cyrRZ",
  "key34": "2ipTZvmvoJk7ymvf2kdXUkNrs3EjSzMP4SsWv1UuVCEgtsa7ahZf45znVGKHkXBKq21hvfFwngWXjYTfD58KnGt7",
  "key35": "3Ju1bg8vPreAkXzu89AkQoPJwNhpyzRyGjR1oJe6bzJzKXMpuDfrBDGt4MtKqReUoxD7ZToRngi2URnuHAWfbhR2",
  "key36": "2wbJxYC3LaavXQbCTHXaw2qBTcRogA5d8Q26UjtKkcYV1UuTpTwBoWJKDD1qxA7WfyUY2MEzD1bA9S65f77biB8p",
  "key37": "fWusjP3wLp7xEQbgR7ixutvYHdvCfLyfmLYdUPKYE67YL4EWdCEyAfUgNnRsif31CWzMRtJ8SRPpKMFjZymaC8s",
  "key38": "3fggtW6csK1eG5jXZTRuHcd787wvvigvxBqDbXHfrP7vL6rs24jTHeCrhyfPhEVvh3hpPNohpBqgfZXV2hhP35aG",
  "key39": "2hcdxehMJ5s5fsDTB8BNWkX8zRyzBf8AdzGAoCHyfTJvfABoAvwKKX5r7GSB5yWx8EcxSUFwvvR65kq9y1pDL2Ln",
  "key40": "4HhEezynT15QbsZdfneBoupDhqc6bR7CAdPGu9Tg49gycAw8V12oiTQHeRs5cEg2LX4o4PKcvtYzD1Fgf7sEs4c9",
  "key41": "3ijhpXpPNAeHA2buQUpSbxNRDUr7u3MpMSL1rZA9zr2ifZXVxPY1jVyW13r87b2vgxar2p5r49tJsadyA4yNhYw",
  "key42": "2Pkqs6Vpid6S9TkP3fSYY3JPnYrRYMnzSetwPsREEPkbmbdEqTEafodhJPrq8gzCvL5MaweNvrEP9mrqJiJrsV1G",
  "key43": "65bD8XEjmcFC8KMCZ9VASK6WJ2jEsaMcK5n55usBcamyPxfMaGvBUcT8aoy69EPVyn2mPoW6f1oPFsoMopsnLMi1",
  "key44": "3pHmypZJJm3VyDNtJbuLjVz1ePfMkVrEdCfFdUFiszEZJsCAB4nHSKzyLjCTMb8ugkD9pvJJbkwXiKfpSGAZ2iA5",
  "key45": "4UKuvse5Meag5K694BDphq2hQnJiTGdH8hYmNVbscRXjd7nJa3YcuGaz6u59KAAMg21mY9ZgnJpBvjMRYcYXkPtY",
  "key46": "3GAVfkh9B3awVgWPjLbc9LfZBcvFUzfNiGLBoTKpkNQaARQJUNnXqcfEmiyiyFNGStAHVCwm9H4fUd5uFd4PxbKr",
  "key47": "3oiK4VCsG8M2ovcnupq6nMYt6GZWwJNC4FEPZAFa9t8v45A5E9MFgHeXA7MC7WNghtfhTuMwdzNixBmtjDrG8Uje",
  "key48": "2TC7GYSMVrVG7dsQLWK9KjcoK4v7oExxCShytP6Cptjb7srxU2oVh1cAawEk2GFKpaZ6kcuQL1ssYzpAukdMfQ14",
  "key49": "4UA6rZdPXFiHi8BrC8heVHE7XPfxdRzPwEu1SPN2TyYEpgutm86rJKWtTf4xvLGv6TUTNnUBS2GqQWZY8XsM3bT3"
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
