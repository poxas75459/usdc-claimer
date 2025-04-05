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
    "4KL3KZEfwG8bJg8YhdbKbQvsFRKmuYRF85vi83pX6FguJcEiZbcpVt5gvRF1eLbYAQuDvEyYQoG8vmGB9PgnqCB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QscGkmsvpxuNdaxMgHp2FtRjzjMqVY7prf8t25YTRyXD3ojXRKLviqbMfyhPm5rjn3TXrRd8madv5yFvCnRwTdM",
  "key1": "FE33x5xy6eJk3n8sF8FrwoUmp9BYrzKZheio43fGBED3xKszcYn1Ctm6yCsEcHnwHqUoFP3pjLQT2m4eNkYoNux",
  "key2": "7BDcf4PyWSNCccwVy7RpSifRNFwkcL3X5KUTo4oUYz4geDjN2ZMxv1AfSFNdcA3DRxEKFEL9sj4tsCTZuQfLJRf",
  "key3": "2JuB4aKrNQ9xL3xwedk8t5cWB6c7LBT8nzQbfRnmpt2ncDCNXka7hYwADUTVZ9voF4RHkWQwXS6KpC6YaQeooRsj",
  "key4": "2nsZwbU6DnNWrgVN77tjYtx2bDyQLCRXY1r5dSh4ka4CopkY2nFyfk6H42cgeygkWPPrS6TDSRckypDi4vwbKo5a",
  "key5": "62RswFRhuM7Zm5JW224Gy7rdJupmFttxgZk89KhsU8QU5SBGUPfPNtLGmFMHEa3SXaiyfEUst9RGXSAaLyNWpn4f",
  "key6": "2AH36bGtZnt2YVezDaxXBFSoF6FqUEEPND3D7RwxMRZi2ZibR34UJQtYZX1Pp4BYPvAXVCPP5Kv7QiUrqZwaDsUk",
  "key7": "4BYMQzHXLXaGpZ2fChz4KWDrKRv6UwzYeUpPJnj6WrvTG3KPDuVrFVMNab3Jsj5mHQAACLMgyNgNJFYdwiiGV3xV",
  "key8": "4y44bL4yivc5THdbsjXhuGbpzKonUBA6E9cdG5dH5HB5d14H9qnGeJWgMgksC3BKW1ibJz817FtViWd8TfV1WHi8",
  "key9": "4uZqzmVMJ28ARGoBBBLY8fbe6kQmooyk9iovhoYnjnSCEBAgEcJtBzpwmTEaFEPRzdVMLyWTpvZDw4cuv6gkfsTo",
  "key10": "41VEFMUejvyfEAcUADPRF9WJawYydddVFPqbSiK6GzTVwG8sFwDUrU5VDsQsdhgzguMbUJVcVPfoE2thYg5e5xEF",
  "key11": "5CEWsWwn3y5ZpBJRaQt7bx7ge8BYJTSzvHgf9V8ZVViGRZyTs3ZERAUyDRGUb64biexyqQd3Pvygsgb1Ycij47hQ",
  "key12": "4MzPQ9iiftPwawsGQnoeLD4zKWsufHYAf6PJzQTABDWkzrZ1NLoCibuC9Wi9u7dM1rTwDYZR3R35rAyJb3DC5D1E",
  "key13": "3qoVvbh3DHMdvonXFkkZcjP13xFXmVAn4sreAenp67FPLF3pb13czma9J4NbuT5QbPt8mC79C4iKDrDHDRPbeJhL",
  "key14": "3yvGCSsdx2q3uG8E63TdRYCxKxds4CiQdRUPhaKAGN32uFSM8eDLc92cnvantWSNX1LgVE7C4TMQ56dp9471if8K",
  "key15": "4MffHVES3xKh86eMrH93eeMsw4t6oEyyWCu7phyazzj3zPuErJcYvmYvNrpje98SnzepcieuZRReii41HgNpxwzK",
  "key16": "2cEH1eKAm46okUvoFi7Sn7MMC5EcSPkZQQdnu2bgFXT6nrHsL9R5HDKr8pLbkzSXxpH5BvTQ25cczqoYqmZcUwQQ",
  "key17": "5Rg7W5kL4ydZSgxAi4gS1nFhH2AvuvAYVQo3zQ56CFtdUxEDxqxu5YC1zqdA3WsG6TmE3bQhXcDRoFPYwKaP32p7",
  "key18": "XVJuzVGmietf7jFCZfD4DbdrNonMRgSHZfXtWq5MLCHm36W1i1SzpZ7v5B1GciMm7ESLvmk7QP3fEwLDd9i1puR",
  "key19": "3SBtig8cqBTWKc91cHixipmkqfKYXthc8V1KX9vGkUwZ5z44f61JErF9Rsjbawfm4njg97fFWLV7DpMRL2ao4Q3i",
  "key20": "3oNgQz7DRBU6UEe9tyBuXq3rj7LRtMTV8utLRAeoeUBwSefTvHaxcgrmtvFHQmJWYfcBKTAHYvwco4724Ybo22TJ",
  "key21": "NQwBYFMPenJQYGbZxtzyevRH6b1rw2ZbkL2rdUqxFShfwafwtokMmskJrLf24inEGJU8tTypb3RU4N2Bm88VG35",
  "key22": "3Rzec8c8as3YmY3QPkSwcfQjJHbtHPAB6anSrpoXZgCYkzb74m9C5ka7rLVBCZTfEYmAkizDyCxb2uSs26vSPtjc",
  "key23": "rmWWiYfUHNwLP9eSmP1xGEjSED929uVNTryWTv6eYafb4ybFpixmwkfv9x7tatmPnmTiYEhdErNV2iNuq1ZJnDv",
  "key24": "5nEbPSWsUgLM2YSCZuoy5nHx64WWbaRxFZnPdNQ1Y1nzqhCELxXAW3goU2d6Jfk93163ZUAvhQqknqChFHohJum2",
  "key25": "215vttwTc7cJeVvx2uFbJRBrBiMvCgxxCMFkqPxfEBQrkoDtRyqERRG4fSFdH3DK9g8zGbnSoEysVdZy9zzvEiqB",
  "key26": "Ur5VxfV1Wee7DDoewoPQY8Q29MLSTYGc3RBdcGeVov8drYYx3TWpFaxgTPhBRye1wkYPKKbSoSUTkWEvakJy7aN",
  "key27": "hsmwhrQpLXhwSVnAfKuJmzJBZSPRwjN6jVhHbYLLWfYgPo7uVb7nq2mNiAheBpixCbcTd6HagaoCi8Wgc4v4i9c",
  "key28": "5G9VNvuZxUarmWo3bA3vo3xWiHrUGeXGuueSHb2opdSGDPiB3JzipcaX8QVv6CUV1YujTJwLGtkP7jTStRUAx9Zd",
  "key29": "664dwgEEKyEsLTVhTZZw2sxZwTkUuDSYh3ejtvNCFAm47cxzc5k1pNrCxpbFuMqKdrQsPCtyKqHYCsMU4kzp2ziH",
  "key30": "3t2rtQEbM8MwDpHUfCpMfstVCMh2TATqFH42jR4BgmXWFWhbG5obSPAFoao6VE8Njsaw1pnNtC6kEsX66T8XoHs2",
  "key31": "3v8wvSAPjDwfMpiwks4q64J7TjAgbB7Ldw7cL2zHB73esdbKcvXjF6A2j3o3jXEbtyeaZDvVKdv5tNPUtQ2qoUNV",
  "key32": "UQoqDsxdcfpmkUmuVyBmEMedWQ3RP8wD9mbr1WuPJRR2cJX2E5serNLazAU9yBW9KcrbWDe7HraqGzaR9tDMqHf",
  "key33": "3UXNLEF8KreqJkBaMt2ikp8k289ZzmH7CSMeHWwxpiEU1CLngpzMA8qWiufn7tvjTb5t3ruFzjTtEuu4knzkhKTg",
  "key34": "25U7TcDSrGHWUhGM86ZPTT3FQSuJL3ykxn9K5yir47wpN5kaoxZhUC9YMroipF68JDaNgrwaVjYwnRDUhP5W4J8m",
  "key35": "2ARaDnkTEGN6UXPs1pkiXdGm8eaSrPvE9hDkrXqhznk4Yvpax8PsK8nhRozJ7vhJMGFGE64DZado6GoFoCRvbcYb",
  "key36": "2ELQvf8zMWarZ5kdUkMc8Em2Rn3szD62D5JbUGDVzGr1V5Fq4N8w5eu9fmrTwS2o5cRvP1LuZHaqcF6SfrGQLRuu",
  "key37": "3Z5oCZyYhD5uBKzoqtExLRmGczfHxJK73145A9u4kkgtJ1XW2xGM4WcQF2QrLMeajm4iwkcMxEYw4EboiYkooPZ1",
  "key38": "35RpNe8CbXM8gsUYngJgiVRqaWPuq6N98MAaBysnZU4eLHwAMcc8RLqYuULfq3kwiQX8zimDrdeVUPxXyiBUhCuQ",
  "key39": "3H858ff96mUbzfmncpx2qp4LoVkkenCtWAYysWUaZ7gMWYDAeKD5SU1AcPp9pu8PSG7K6e6fnV6mYeDEGbok1KvR",
  "key40": "3kxo4uf9e97DoUFhpmJDUQ9VqYqxgucjbUpN86tdutWXu4CX4Rc9TBUkfcZEG4kWAQxSdMnLikqNXNezUQHNNLRR",
  "key41": "3YJfrZxfZZ9xXPAzkTarKD6EKKXcNeCF4Ff1hvzqujrD4ToF2NRsCNhBtmQpPAxiWmHYRN3rk2qzpKasi4iJKMzQ",
  "key42": "3cCXCtSzPQf13mJ4v2tXJyzBm2ZLXesYsJEiKNW5SNm66q6VrqZu5t2AL6EuBiyJyn2ndUbM3D6MF6SiRTHdMr4m",
  "key43": "2yQuSbhoxEiWRZSz4PLC4fmA6XyLP2AKx5HoTnkWX34i4Th6mNtSFiTXnLZA6tyZ1LC7Tqb6HJAu94tz8GAuREEm",
  "key44": "66oqZLBcMHgZJtzmLd6jEh6TNTM2hEJc1SCjJ4k5BgMX7UzxErjM9Xe4HsjrVmqu98SVTVjyFiyPd6ckhGXBa1WU",
  "key45": "3aBXbLzyCUvyf6Anxz6HCfXWuP9JwonF3yrPScv7Y5ip1UdAj5R5ajHHDFA9oRQYq7FV8TA2pXftkt91FbLVSHF7",
  "key46": "5n7fjJp1hcpLFN6urcJ8nEvVs6R9x9acJZdBsxBDBNEdGUtY6kxFMB5Z7AyMfKSaU1pm1rzGuvtyfRqyaq1SjD7A",
  "key47": "28M9RjJktA1kKJs4ZBkSLLiPLtuXdSWsrh4pK8f3UpG4HiFVFKqL7DcnV7A3JtJR2TWcmvz82vtbvJABaSJZY3gm",
  "key48": "5xG24UWsQhjRu1juq6dPj8ibXswpjtKdaiZNv9R1CkFjQ6e8nLRG8MqnUf9CPjpdWn8zEdLpX9GBgf8g6ASbyg4M",
  "key49": "LGyJFVoHEWadwbHTNNC27eBG9r39N6ETKNBaLDs2BCJeHRBcRNGT7X9EWoRBdhjp3jr98pSDd6UFEuQdUWZrc52"
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
