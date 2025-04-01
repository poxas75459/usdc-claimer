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
    "voRa8SsmRNvBTf6SFzaesWPCyZFqSXdf4FmMVntbtvdi22ZC3m4U1hN4GfxN6GR4Mkoahn1s8FoFuFWGpUME7Vi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kJ5NjUKRoxG7bRSG3UArU4Qsu1rgXEShWQDNpMGFv2fqPV1SQKNRQSrHE8uJYUEC8HSCEEMhRLhTzHii92EP9S6",
  "key1": "5xYdV6gKqWsFoy46B8ZWFFkzMdCs2Rk1zf8K2TS1e9gmARdf9kH1VzQW1H7SK89oEtQ8DM2eDrUEqHXuA98FtWSA",
  "key2": "44kz3jsXjBC1xzcGxqMVx2MZbJnbfPkbBE8pcLs64CR54vUpASmPcC8WXxaybTeCQYBFztVnRix5krTjRuoopY6X",
  "key3": "4sYE69CifkdaVTnEsDboChRZzxVcD7cBiz1iRJnpreB4pbvqwrmUB3rRuh5YFSaeU2Q23FaoiYhciFsWk38aqZvt",
  "key4": "57KfYAUA1Lcd16bw3v8SpCgS35EZfmoqPqm5fUA4e1qcsfD8rpxphb1qPmAKmd2sEMMDQ16NSb1CCwjufnpSBLDS",
  "key5": "29rpTVN7yLmJB7kiXnfwHyAPRbughWAwEyCBCs7rTFApZxYLEsJTpevcLhJSxahttBBe5WQ1PN4gBPmnLXsRWSwV",
  "key6": "2QYX3B3pXfoQRxaurAcMPMG6WtiZpL4dWk9NcRttLJaf6TM7gcbxmV8JaZAFzSwJtYVhmxL84e7rD8U3BxakWMJ5",
  "key7": "27dsGcrTCub4Q2J3qMuivqMrdu2LdkJjYmo6rrWw3KxtiuSCTEtqqKdLZYkbhSWVjYLEyG9q726bm7K6qBdPMiQC",
  "key8": "3uphiunAENkR1Qnpx2suq6QA6VHTqAir5n2yJhRf4ssBPSmWact3k1KSfWTw4XjFdKjY91s5XHSJGRLoAm19PRzX",
  "key9": "YBudCZFVZJNiphmg1CtCLTvsRkZKkuQEZVsqH9SCdoFGDPSPyqCzBnfrCJXhrT4XTcvc32xT9bMVVHRWhHjkWXe",
  "key10": "26EwgRnvDgjH99DZJdnmZeh4tfL4Tb3VZbhTKc8tv8g4H7G9aziZ5cZD58wTpABTK1rAMaedo5UtseSdXzRoYfVT",
  "key11": "4td2rNadzvkSnnnUqvLvbTVwncQh6xpESvWyMxRFKBNbt2wCR4bBxVGjJqvQUdGGYp1UqZKjNsEyHgbtq27JEbYE",
  "key12": "DomHaE5SrwdatC9FsjU63gDLuFz722FMBmGPJpEhxPm95cFtE9mRPy3nX95wgtcLcZpNV33y72awWVcQqWeij5D",
  "key13": "2epuLYv2t98ruxek8iA2DSzcV4SPPXfzCE3hnQYDxJQzK5MWXBViMPS2wkRHsvWMHjpP9nCwL4VXnicnJ92z9kgs",
  "key14": "zUbm4sQBCzxVQQxDUrTU9XeMrBH4dBVucii9Wj26d4VSaMqfZ8MAD2R5vH18XsTcsSU34h1529XE5GvTiNSTK3a",
  "key15": "56AuCqkre3XqTujhL5Jof7ASyKqAJy9raTnuNQL3aPkEeoyeBuyn4yELVAyVySb7gafBuMhYmw7NkBn32NNutz5A",
  "key16": "672D7S6Vgtq6UmKNYVnLRa6dGrPksFAznLiKxFhZvtfSZZ9UfowjvBMCHiMJrohPzvFLJjEEgLDNyuxVkdwVGSEd",
  "key17": "4EzxQvMJxwq5FhmCkhSME4Hew7khwdSw7TDKHXPwbAo9spjaYfvx5M1zMe45HDzRBX5kMR49VXSZr4vTqE1aKBZt",
  "key18": "GSBHghwmbQRc4M66cJA6dwda2S7CJEdoqxMHh5Q5srQz7MjPixTccMTQRiQDfz5ACLrqdNQxkkWeUbU1dN2FxUw",
  "key19": "4sLskc5UffVtueDEBSHU8FiJTucV5bQjJjDNutb3cVayVarSLVU3iwm1enL9uQNSL8w6TPoUuBQyJtDtd56pK1SH",
  "key20": "5FPFVWoA1Rxkb2tQ4MHXeiv5fatpPw5gkXQXg9Cam2wscecvepijzyHUCM6adprg58jdWgfdiECxJPHkXZWteZfV",
  "key21": "2yLyxUFh7uY54JuQKF3RN9eqYsieYjXkxN2ERdy3Qn9c9MDc2pRRQiwZDgqquqeTBkWyrHGTMfWPgcvUiToZHGqd",
  "key22": "yufiSZgjoLDCLDCosXqoSDBw4SoEs12WjmEmfsacvKXQAvEJQrDZL6DUor2xtLNfUjRWJmTpC4y1qQw3GjMA3uJ",
  "key23": "26CKarNXpi7rcRB8XWhzcMhRVU17eWrh6e8ZSgbZ4NpfGr9vrhmVHV3oN1wdVypXRqoF1FewKRuzmjFT7H3tCnk3",
  "key24": "4LZJ3EoSrEScMVSQW8DPhS7NMWQPzSHsFYo7s26iHSzJ6Eop1xA8z9aVtTWcWUnYrUPFvQzqhZZSmJjAP7GTFMKn",
  "key25": "3L22gMCWDQ3rrAdvPDV5pi2E3taRJzrwYDFQ1LetiggbgwsUAYjWahw59y22SChJhN5Gm3FLJR7EqF62xCqdtMph",
  "key26": "Eettn61jJYYMLpY6sjxR7Zpa1wgTPa6hf1DZe92Bw2u8bPApbzfnc56v5uCSiKJenRoYdWdqSntMXtarA7qRwKr",
  "key27": "35t3Zqf5vaAJ5uQH4wsnSsEsknoAimErbyz7TgUw1NYqTxgqjkVVw6uvyX8vNbXGwyf1KVueeWGN8fAEL9WRDVBA",
  "key28": "4TYckVH6JHLPnqXpRxU98RqA2YSYeCisyVAstMwhgJ8A2QNQ3GrWeb6GY9nskDApzr6563HtHwF7FiwuFutjCQuG",
  "key29": "3W8mWWkSbZqXi8hoxYEZHhApQLpy8ZWBdoMqQVxrZJkudNi1YAQtwHnUb9y2g5RpYtCMJpYYzWaWj9Xbu2X1UGvV"
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
