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
    "3GsmdPFQ4hBXSUrnoLx9LPAmooe1yK1mabCBkViN5FR95v6rUr2TEU5ph1MX8tWcoUhyj8etW46mUku6Kct5ZaTu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3e6ELnQy87GTBjrh2wtS7hG1SMmDTXWz3dfxm8WZ7oME9gQwCXP9LgcfhcSBUDVx5wWySLXPwPxizatN7W46hhb7",
  "key1": "42d2fAN9tFJ5rDCnxeKzxcEMB984EsiiwMwfhp99Vof681z8GjHcLRBntcqhBsUvpdCwxgrFj2PwbYJkz1w6XjcR",
  "key2": "3zeGXBJ5gmw8AQQMwA69sbtH7qzBf9c3wTkqXDWuAjUMkPsArLL2kSpeS9CRKFTxkEy83FS5KWvcikEJS57StaT9",
  "key3": "5Fm2ZA4qJys9TmBRRPSnEKXeJhBoRhvSa7Af8q9eMtuvQsot8PtF8bLvNHmGtzx3FqUK4VaVjy6Dxbg3DbCe29Ug",
  "key4": "5BucNB7pCJmCcE648vPkqavn7Qz6LVHjeATCpk3Q6Wmcnvpd6hLDnzceCiErsUTASBUPdVwFVAqbcSFGQEXpNwSW",
  "key5": "2QTA4aSPFJ3SXfoPaiWQJ8WBox8DzMEj7eso7yPbyxxVSYxUDoTk733LZ6MEprtRbQx43587pZJF5W4GaKCFTwKe",
  "key6": "2EPQiRueBWVEg8c8dXYnBhHLVmx65EsAkW1uxaoJLzCwkYuHbmLEn4rpY3ZrfS11Q3VqZdyBc8stT1d36ELkDGgZ",
  "key7": "2gpvjqZRCXKsZ5NYAKP4UfvBctVawPmtdcoKHtn835oWnBYk1bKaMfDqVDkhSn4u873Jsdz4m8JqojeEiPRcpiWr",
  "key8": "2uBSRFRpuMzpfQNeVbdXRoAa6UaBH9zaBhJ9Nmi1vBhpneRs3yAT4JfTtE4gTaSzcrfLQaaHXp3QLCXwEFXjybmC",
  "key9": "85RGpbkPBK8tyyjLaE4tLSMrKrmWfJeqiV844j7VsnSL1rNkDkzDZWiZPd3cM53bhXagsEpzymguxbehWtDGfnN",
  "key10": "5R3hxyx3J1934mUsTZTQricBvAbWe2pFUD8FBMaYeEiCsGWpGA51nsFrdKxeQUktyK96eZsMMTYzV3TkD6eo2v2p",
  "key11": "5RPx9Afn1PQhTuMSqjChr1G6q6U7aR9w9SBGUA2UzdWM2sBjcbCaw8Fx4pzZ74b29Bd2TymEaQQwafpRookgmtWU",
  "key12": "3t2qdZpCHAVhWWTXCgTGr7xLH96eNcNsKW8jgov9zfV8TQEo3mWid462ue3A5scaZosiPjQT3iqYKKRBgjhUkDFL",
  "key13": "4MNzAz6UYf77FK412s6SMgZjvWuxNMsMm3pSipLyJv8eWYCRqQygPbBdnsLKXJxueVs1KV69i2LcPr3XoseUMNUz",
  "key14": "2KEkPL2rdDW3TW6pK1jN69KmMbfT1Gss71V9W2x3CDq2BY8ci1RXEDDEd8yhC37rPcZ6htAySEUyar573MHSec2e",
  "key15": "4kHxT5dh5tw4hbU9tnf8a8Xk7Ghz4mhkhfyeQ6Q5FJRe1KtR6M6CmCLFXAU9RTtJhzHGvgnNjfGnKN4huW1uZQiU",
  "key16": "3W9jBHc7jJPX16k8AFXrTNDSJvEn2d4LTLKiUXc8JbbqqepWGF54qP9iDdrrDmRCwEswZf1cqJMPnuKX8yjHn5Zf",
  "key17": "7jPFfmG2irj46z148aZFNkNgNoSr74AZ8ibHryTY2vhaXb6A5JfSkyDStepy1GCC84dk4HmWgdRBaz9E5ByvWM2",
  "key18": "3Hmdk8ka9313zbAVxWSdAgxmNhWbhtujMvFZxp2wg8MS4yY9Wg5bf9n1JAEHVjCdh9K2PztKDfKVrbx4KAbSBYBm",
  "key19": "27mWFtdXpg3VGoWz3sbTAqqtxT1ss2bjR2v7h2uPAxzwScPuyXu9EbMMJKQpoSwVihCXT2GHLWMPnmNjBzogKPBg",
  "key20": "6JvinGrvJYHTEvHKj1AeZBfT3WTDRsDMT3duwUDpYdhL8qrzoznvZZfXgVdxfHVd7g9XLUgJefGgZBUpewUUPKt",
  "key21": "29UzLgLemauJr3byV1s4wyHtWe1Nz9gdWfV619pFZmiAbX5mavLjxhExBLpdKVAgmcaFsP6YWvoidF3RAT8YbeTf",
  "key22": "swTdBSCNhCCK4XHKVABUszw2DUAjnymyhWrSMBHPxhoKzdtLZMucxfRgps81uRGPGPfQmFBXkVG8DZwcyeVdWX3",
  "key23": "mU7rTgbjmg29Twwx2nQzVjQXzcPhJKHdEH9Vn2V8vccvnyKS4TfEqXemuzotVgW2ff8t3XNPeXrz7eYPTkKPdQJ",
  "key24": "4Zr8nAhzovd4VfPFgk9hsiVbKxT4LsNLF2gKRZDFvSHxqKWHUfxZEg2iEZ1p7PNWAtzEWWoU6rBvwdL6rAtQPKhb",
  "key25": "219nS6YVy9apNntJsDiEA5i2G1LJ3fLPQS5QgEPayJU6GiCMzb9cjvCzURjX2oDSYbEs2rytZWURtm5CSHJPeHPV",
  "key26": "49CjHbFHhVHUydC1qxKhBYVVZHAZmgHjUVn7GDtt4Tri3Q8nSgUWr8d15rpSBbg6YLxaTe4DGYpALtrjRoP1Pw4a",
  "key27": "347qKzk35HZDiG4kj3uANjF6RmW1TBkkfcBbp7JsYXrEKovTEL3TpthTDr7B5JccbnrjpwTpm7Bjk2zWhBrj1Lv9"
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
