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
    "4q8faYkskDd3TMwBiV3aFixXVRHCiTTTinjvnjghNrbbChVNkjeJX6KPRdrfJUpoD5ideVBhR5FB8QnYJRzSrs8u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pHjGoGumorbLMpaSuE7KzGsuCKEKCn5mpqWwgVmL5A9F7caPHSHaPWi2rQd2wagaMGujoVaz45MxeEqX98Svfa9",
  "key1": "45oGD3d99JFgs18E39GAmZdD98tQtFnjKjifn78mAU7W7hDirmkF2DwYYm9p9zjnVSiRovWHh3mLd4b63XLsXvXr",
  "key2": "5KxB6HWgaar14Y5Z12TWogFFrodpXAupWse6HBHnRzdQCiiqoYousogNpWm8SVv44oRtMEN6Yrzq5BgzBPH1tb47",
  "key3": "2785Sa2LvSc3a11bN5yWWNgmTiPaNah1twochXQ5C2a8DjzfQPxx9Tcz7UKLQKbSA2Lsp4Ns4ED8MabgbhkmaDox",
  "key4": "5if1gtJi49WkFuAgEts7thAcLWE8iRcD1EJPzLkFreYXDajg2LdHfeFmyynZYFdp9DH88HvbpyrLnAsjG7MzT6Tc",
  "key5": "48zQRyMAx4jNMmedFtUP1yrNNTAiUbe7mbtxP5961ods448vXwD1xecdN3wE5NiUZJAE8x6dhLUR4Gm67e3Qd8tb",
  "key6": "JRhPgufE88P69gXjQacufTBCNNN4Qo6xtBqHkMBjiTukidgJAnr7Xnh263oB69f5fzXhFdMHg8ZHktQVNCn6SPG",
  "key7": "4otY37RLdj4SKrfmyEEooehzv4Hk6rzYmmcWTXapGyDpH5Tz2VTh4j5apXUQw8HN1J4dFDMUSe4Sp6axinmRL6xf",
  "key8": "2rvzefQEUxmMM2pTg8z71nAkodW85RPdrzvyyyu5xPurQNvEbwCjrxrfu7VRAqo5e1ECrdtobRiPGsXMSrYwWHY9",
  "key9": "3GqZYdeCV9JjHp87wa5r5bPtyANyXZirGXMkA8PGhHqwuhCGMTksz5Tw1CPe7HAjEFnVLSYgNvoVNgf2y1bobsZ6",
  "key10": "4doMXFAmqsUoXmr96GcAZ9swytQUmbGir6qrzsz5ku9HYuAeQaWpc25Wtxh4QiFaLupixu1Jw77aNyqb98RjZ9MG",
  "key11": "4jTxop7XoERgrP5KFB2Udx7SU85kdWJBnXVuhRFtDpCP2Dw7BMsAw7e6ierA6wQSyTCaBWiTS2JND77CnvcRonDL",
  "key12": "5gSU31raESdDnkmvRtnoJUkSaHELfbngeWDqcjBKt8DcZt2pBSKi6zYMEdnZy383XgLE7QYfD6GBMjaX2rs8QWfz",
  "key13": "5KZvaYu6jZieWzWFvtPT41QHodRGSt2rD4sMFkMR9qBk2vem5k3U96QnbYXH1LfkpbXNc8G5rf3XFmSnKzoDTH1v",
  "key14": "4LF4TtFZmqi1UnuPRoWjPZdJYGTtUwRWfu3m91sD5Fqe2srHCSUB7Wy4x77Rjdd9JjbTja3tXhKa1H8VeJ9UpNcK",
  "key15": "5DsxnGqsCcotvbdpCqDuCVKPBkufaKJuJqxRZRxKpgPdGs42snFKjnkYWiKMxnXWMiemZfBJGWFU3VdVCYH4TBd1",
  "key16": "3NuFTrG6nSQP1U27cr1PjFvnR1p1RjFJQrgNFLEokziBPJvHPg9eML1DxF79ku5f2Mij35h2o7z6Kpp5F7E3wfTW",
  "key17": "2TzyzbxKTDFka5ybsRb3i8AKcUpMst8CGbZtotAwkbQSw1fY47L4HUdsFMFY7hHUQYiDd4J7Z31dEobRb8rvoGJQ",
  "key18": "NXvYsatdEoQRph6Pqg5Z7a9sWjGCi98Dr97SC71xRBgaK9hDE4zqBp8g39iQPd4gVuAUmZhw8671WgkqrxNmzcM",
  "key19": "3VS6nnfgMZhERfPRxyWfAZYRd24DRCNUYVRd4gJGbbztW1tdMKkKbcT5nzXCNXpjfwgoziRbYbzuUhHyJ8kjteiE",
  "key20": "3ZU9HdCww99tFz9GXLbPJDLoJ7f2AjzTTBHEm1QLfVkHkfWzGfFi77kYY8bnR537V2s89HyP9m7xnqkk9Ru49f68",
  "key21": "4X6fnP45CGqMHxSFsHsZjn9e8Vzmc72o3uZ9egtSHehJcorxpND2YhJJcA5yumBHQSK99PZ5hWuGq1vSW4B7mRSn",
  "key22": "4Uv47suCkowPetEVQTdXhp3RqTpkmSn3dQNJhgrNWCu6yqVxoayZJ1NfPYsVvx2q1mUX8WeuGvA2SL5gcMWAgQje",
  "key23": "4qtsC5wcZZS7K4eaxYpoXpBaNgReqBhZ7tqRuGy2FC4ujFpizGUP1kt4vFrtVhMXCptz4dGDtefWFTXvX2DUjtub",
  "key24": "5gfKQxBjrx6BD7Mvvsae65xrzYasQkkW4HHDiz7vDsBunGSRoPWrbe2v4nsMLKDUGsvJFQUYmWyP2Tcmx4bfq9ap",
  "key25": "2PKYRvY9k66vrboxdtqiBcwwk7JCs2urRoaZZU21J7yaBkymdEUkEKLt93ZtFWSeLktkckiomnZZ3jasjK1XjwUq",
  "key26": "4XBtPQz81zFTekXYqfQshqSMPFQ2bKRvXNzcAeVSidJKZYsHcnQTJh6Y5AKE65a1g8NaJsX3wUmEFWvAxhf9HPGC",
  "key27": "5LCsDC44iU8qbjmpwXZ5Z8VZccVcUvu8YBoHFZP5dX6jPkzKuaLqvfKp6pjLKKoV9hR9Di7Hb49mVkT92PHfRsb8",
  "key28": "3KXAwCzUX13gnU4rWiakJaDaLBE3wS7NFt2HRVZB8tcMwxBd35uCrH9xVVgHyUqFkHmg12M7HqwQzcdLsdEQWmUL",
  "key29": "2cPRqvpQoTWTC8aguFBSpKTQ1PaFtWwN5znwB3fFhi1jxVTuHs3q73jGpL1VCrD96CybWwLe9iT5G5UVRKAgwrD4",
  "key30": "36Y7DWXip8N9iKwKJcMWDqxP77fmd1rivGCxtCw8GHdnmWaD7BxwNMjU8PohJa2CvUZ3MLEBcWQv8wnsXVFNiP8Z",
  "key31": "4J6yBUkDRtf2mT6DoRQ2eqEnknPmQPhi4r7kgcQvXPMKD5XaGboJL8F9tbi3FUyU4qkbjrFtfs2p7oR4JotfJY3d",
  "key32": "3Xmo5RAfhRZNEDTGjrHX8K3snCgLnT3opDSJTKTFTFQ9yDmuN6GmvQG8sFccVs4Z3T783B7gcpLjmvjKPxsytFc",
  "key33": "3i3jvWFYGhfWrPPvP6s5yo9yDjBibei77vPA1ddyw2vpRoUiRgFB7AsakySHVAh3phBJsXHoQoHHjm7rr6Qq7AaQ",
  "key34": "2bgyW1pGkST7zENbtRDGRL1CVbXJCfDcBQVWoXw7Bz5zSCX12pqJ73DGxs92KpATw2fRLYYzFZuSV7K5mGUFn4wB",
  "key35": "3RY6HKPdboeexbnk8YyiTNnczPsDeduZfaEGNRV4Uf8gqmWbNDRFryWqXJjDKi34Sbah3fy351uugHjMM4nB2Ky5",
  "key36": "2LjzRbrJugJaDv53ASzFHuAHEYJvTxefY73qf5FGTgUBgeAR8pnqXHoUpJVoFSvyrnbFd3FGx8pHkD1a6UUuiGGd"
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
