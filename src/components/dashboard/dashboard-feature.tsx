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
    "3ocskajs6HQJ5jPTq5oycDLpm5dXDKKo4EqregNiBgc452pDkV3DKYwxhTbeBWHGHdnLcBDTzBPC3LJdTHeW8Ci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2D2gZindbxseoca6UDbqxvFd3gvYTxjGpaiXmrqRGPcn5J5s7vAmLpTxHfxN6U9QyR4RUqQsgHXLWHgJg7V4EVLc",
  "key1": "3ReAer1bykPugsoGjMpYXNZGya1GgSzhXd1pc4cXZmffsfavXHSZmfupModd11RX8xuw6EdD5SbLjN9ug9CgNUoZ",
  "key2": "2qvGEhhde1hghXkPu4jUEcoq5YikhguHZfE2FKoQmJu94cJJmCRLAxVUSct1egWjDEpTuwp7M9hZ2zHZEvCnG1hw",
  "key3": "31d1cjdTv7ff755RRiuo3LXy6PVzvvt4VVTiNQWizwYgJZdMshpoTeHVpHj2BKMptHXFxUrvZgvQbr6fgTk7qEHx",
  "key4": "58PCGCYQBuHcpwCDHYdMmUVjHX8AZxQEznf31qQ32VM9ESDwSq8ytWQEtjQt8KpDHzmCRCq634x18GdxZkrMUPCv",
  "key5": "5CHFcZu5QXpChygwykHwk2Si1gMdUBZxsFbBwTXAFwyrgJBicd3FZwmkvzAfUnrvVksRZBgYpqaEjqU1EAKYUqr6",
  "key6": "51bZtvXjX6VFR1BszniLy4Sde1XjrJ5x2TxLppc1YVD9EsZJEfAuepvSUsf1o6FmahzHPMuAv71Npq2594xh2ppR",
  "key7": "4mMFrasExSo6YXps932hbLQjWvEjq9Auo3sawbXKm2XAADzAASrxzAFfKpNXYwyee4KDERMTzk7YPYw6b5NsjtXH",
  "key8": "2QfKM2R5uCFKWpMnVe3d1b8pGdRvmiTMdnHurrfamvFiwhWaWc2DxajWRjamRrGGygwoEHmT4WcYMkJmKQdsSZQi",
  "key9": "3QQh4gXRB2A2KQfeGsjQ5erVp3jgxSpAFRnwAqhnHctBGZMiP34HKLMw4GCtVmSWuGjGcoxrtrquf5TYvy9Rxo8h",
  "key10": "4VPwRMdwTknNcUhBDL87QeUJirQp36p1AegmbryZkThnyzWTucceJo6RyUTPGjLrccrhAtpyF5omeM57EC8N4JbM",
  "key11": "CdUQ98XuUEd2N1KY62d3Tu5ymmuHLtrDJyUaPa1GhZefCJj6UiAKir2RgSDihDevj7sNis7Roy26uzBQcpZ7vCP",
  "key12": "2KZAJorG7drkbMmtukmKTsbwY4kPXygHYibsfxLCrLDAepufv92PQKbYpSVVKk1PYXN1tbmt2cxAjp5bAwZYTLLC",
  "key13": "34HJkvq5xSVXW1s9xMU4wdgKqbjL9vLUPV65iH8DX4xpWRLgk5MBm75EhxTERRfE7nY9GpnoefAtQtefPKPACXJC",
  "key14": "3XXXJA61ntP8YNTtCFZjyTRN4jLuqtwdoLo55gbpQdmH8aEMhdFoqPqAfKHkXfbDmRG1ZNSEC5s2dQouPEFXxZQh",
  "key15": "TCix4UyxY5Cg7Dt8ovUbn5qHjynPRNQSoWrwsZqZuqEtHhuRfiP2TGeoc6au8yno5R77Gz35P7NCFeKNsUzovqU",
  "key16": "kSjdknLdUU4wJbDcfNfW15NjCLhtRv7Cwn84LeGeukn7ajiK3yQFYbzoQWGgYn5nQZhxjuZotx2L8uUprM7jmrZ",
  "key17": "5PRcfpvUve2QVaBP9MuzXvokr5itqPmZAorpNkJyVU8Ai9piPmGiQAF1GyUXpc9TPfXHMBPEYoKDUazzYHdw6RfY",
  "key18": "5aDzconcrcaxgHN6F91yZXwdBMfssaPYHeEqbMiCQvpBY4XPM1AyjGj9HJUdrLpcbQ8CCZorecU3mjjL59GXnMR2",
  "key19": "463eFGSYN5w8FB2VTKhEHutvjWdTZGB89SHwcfwjLVDWeFpY5xMbbtu4rHuVoyk8oh5N2Rsc6d8B6YWZHBHAvAGK",
  "key20": "2141nTzwVjrYwkxxXhoiFa7dZs564dWWmvwRnyH7NpUsV7Fjik8GMcwja29phnd42ZdUb39fEWjyeoYKP9pepqHr",
  "key21": "4n4WYoPu6KwqrUNbGWDuUSpKDCAvz12amtaabmUzVpu1yhGdLw7xGpTk79yB4xcjBoC2Ywe5fyATkmF2dTWYEyi2",
  "key22": "2jyeaJZZhVTq8AT3rSmkbfsYmMSHe3MF3BLcUbD1EPZM9Rp7yS4yq17jRMCfQM6k39PcuuTvKYqekbR87RyLTzTo",
  "key23": "2FB8i7ggnLwtnohCE6b9cUrMY7d4S8FWJK5A1AtHyxj8rKjsGUEabyYnHywHAdQAuNg4oJy1Qmp9ZMYcV25q51Pu",
  "key24": "2ge9Drh5bDXPNPSreHYK88E3bvrRcBeGNaFdQ6kJ5drWqgsqCi6fDfEVYJGWmnjTZigQE4kRpYGAtcv7itfZUus",
  "key25": "55sUSo1v1CFETEVh2D58uXYnFykXm2knJCD9sJeS5XDxYmoBcDi1zHCwgr24YaK29AyVTMNax768DkqZphDkbY7W",
  "key26": "41tqKbs9RhX1ditwv4aVor7gR9s8PGGLp1WxEpppfMpTEsTeQtqzc8WJrbGY2jNVKtFFr38fmWeV88LJCWD73X14",
  "key27": "2sCNNXpVx2zc2gMEBW3ZNkzbwVHsKb8gtzaZ3drtvmRQvnv4Py5jm6ULgbZU2kryGeCNYMTpBJ43YRZ5urRz74dF",
  "key28": "4aZsz2rrJiqK72ySDJz52ANujgyqLohzAbeQtyi4F4Xvzu2wNrUAMTZEtY3DkLZxcxv1E89dZ9F5Qb31xujQUpi8",
  "key29": "2yJpV6ALXtye5RDer1mozLxYMPKT2mhTqqx9BMM57z2Dzih6W95PvSFsEr7jV1Huxzb3JTrHnsskfF6rA62DNgy7",
  "key30": "7roY1xoizdEQw4iP9W6ZqCAyAceUBnH5rJn83aCmDZAXwmx6mRhWYNgmgCAHKGhLr9p8B8BoSoTcCjSUnvUsc2t",
  "key31": "65o5GdDeHWwqrBAK2tzDYFL4b4DLfkFQfpAkk9QLKevgTYNwouYMK9Rdo3xfQTj952cnFY5TpfbsFvPFaAYEQ1Gr",
  "key32": "4fBWrVuVhcgUUKtpdvzK6dYgoj7sUR6hcCj9gT1Z9cNmCA68AxzwvGAzbSMgMaRUpUmsUNqg8Ncs1ZiVkiN437MY",
  "key33": "4k9HhbwHCaWWYbFpmEwg7WSzwf8FUSx1PvfGtFkD1wpYRsVp5AEsQ8fy6HH8r4RauTygqAoVDMpkfNVdJLjEzp5s",
  "key34": "5BuFVYRXpTHgRqvtbHEJRaoEAWzr4EKWx82XeN8LHvWZdW1SeZw8VoP1HDu98HkQePBSToBz4YnBYVVgtJNZonKn",
  "key35": "223tTFoJJ6L4qDpBw7vz9NPV16yryX7BSvecjWJQU5Tmz27Ymf9GcauRbH6PBhAGS1WCpujYV6gf9ALCghRTyBYG",
  "key36": "H1mtmSM8FTaYrXEcgx6wco5jLLqFnKhPruKnCtCp4rzzs73x5wogfEdGzoePzYjMnPkNpqjW9dbnn5n5rCv3i8r",
  "key37": "29rAQkD74LgWzWzuW9hs9ASymXup19oioUrUKf7NkRmjfTVwz8MPakHf3Qaw7miXWswXEWUNikTXdqvMKkquJQx8",
  "key38": "5FkVHFmVYBwBmXVqMyjMfEGA4um62y418un1W8AM5Av9SuD3WjLXZ1B7K3DB6NhWv3z5sYDKjNCeiViZ9QWhdvd9"
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
