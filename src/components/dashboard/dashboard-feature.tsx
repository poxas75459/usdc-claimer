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
    "2WyzraR79j2veV8eQRt3R333jFr3Z5KPBZR2qQUJVboRRwHmYXgtKnhHDz53N2BgSjFoWUi2zUVwq4pbCzReyvuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Sz9b5Empad1a3jPMS7ffkMLhpPEffJdnaYQkSdC2iuTquHW2D9VctWmmSDLnrZespLmJPiEK3AtLqqKyKorXjmP",
  "key1": "2zg9pmrntH6B2rTkajcTUM8CiLz4dVmCySgjVm85nShfmhFAGNrsrWjYKghv5rNGC5UHrv9PzkS17vfneovFMhw5",
  "key2": "5BFFsofCmjso82qmDsLjsn4ifiGgy1o44dHr7JN7jp39jHUXQ9ubdgxVjMLaUrHJaS2Hfb1iFK8ZprHdLnybLNzv",
  "key3": "TuYq67RB4EcR6qxj2mHSNnyzmfcq4nAkJMLykudF6E69jmqXNWu48psqHp8HjXVszcesKPjBkLpvmcnRy4yUiQi",
  "key4": "25jDKnXuL1bjZPpcVNLYfsfGoNxVqJN8SwbhRKmw36igjuLJA2Fcq261uDRtas8phcXPUQh5tsoUyFvyL8Br5CZ6",
  "key5": "2V7g6qDQNuJSP6fr7SWfsxuw4X4BiWw7A8RENszxpLuAiXEc6aFM3Tn8foxK5Z3KgjtzEUF5P7pjwvPMFDx5oeLd",
  "key6": "3AZCrRRQ1bk2tqWZzN738ru8FGFvXsHmtpBdExw3WhrQUzkkYg1S3oDCVCKEXzTcQurJJpNxDqSeSGUkqXK9qvHD",
  "key7": "5Xxe5irJVoh5BJk9gtBqMA5FvNgJ3nmdwYQ3RDbYUDk7fVEwkGtFhaffFNxYMfswGs8c1k4har4LyyVBoqjAk65F",
  "key8": "34DEt7GHgv7P5T9M8QkDHxTcNsqhDaBge99k1fjKqm7u99as9GSJ2WaDJfUsJsbt5pexj1RmDNbpnCPmkZ3SRy8E",
  "key9": "2XqYKbWKBhsiNjhSUc15UqpneRAWbRsPM2P1C5vDXLbYkbT2C4psh9u8qKg1yZfAFkkeBizh1QKajm44mSU7EASz",
  "key10": "b2F9ths9FfmybkpQq7x2JausrPupnAzqaUEg7znyRB2qpQ9RB3AnYiACXJ8wb4P6HQnc5r46P6A2ZFtfdmBL1dS",
  "key11": "3drSN3wR3eZUfzLCaMqw8GEsREoXmMC96BVrocYkY5whu9NhsZi8WGwF2T2aYr4F63fBHRZFiqELoxGf92qos8Zo",
  "key12": "EJBU1d7NLhpQEt7Ve5FeQyFrP19Bmq5p28bc5ixe2jKojqJGJQLYc2AJmdFXHMUStpZJ8cjTvRnPF3fbjGZGs89",
  "key13": "59WBgpHNVBbVMYrwYfhAKcfEkC5zpV7UaDAiEKh8fz1SWqWdC4BTyebvaC1pwJDXNDnTSDdvQ1NuD7DccHtHAZNJ",
  "key14": "5eEZA75arNmrBNYiR1NpJ9Sg1BdEzVLrs3PU3quyRDb5bRGGX16niiMtQGVKhUxy3rSx7ranSyMM1TH6dj66gbL1",
  "key15": "A8mykVjgTDErpGMiAJF9PxyrcGnsUmAYYGdp3xhcnocCLmtZtB9AF5G22Ga1zFgb7e6KU4F7tQysH3YaZ8YYKfn",
  "key16": "EBj3gCHQFaeBMBTZNAAqkyg9DyB7mpvJVf61LxFAqJ4AsPpzN6uc8FyFwrx8mVNR647yGhDC3KPydLtMaLKYNfZ",
  "key17": "5oGVwuNqwPs7cSDNMM6hZhcX9tYXpAHk12NXZK2tRpdzwMXfLdqwpUj4N48SKHtMfENLApXfUpLX8sYJ519d1io9",
  "key18": "45PkM6fxb3WeZt83PhkfFntTxmJC9LZridDZ2GehmP5AQYJsvNP8B38PW8SXxyv8u8qQzMSzGXhmggpb7e3MNep8",
  "key19": "46tSpoQ9MmHDTEavgcJXZeMfqcB536w2JtQs5kVjcf59tHoKMHnsbh2bsRXyVZmq2jT7vXxRZgr6ckyFN9J5ztTU",
  "key20": "sDSgnmQqshidPrKx1vuvoqSzRCdQQmmuoNV7Sz5pst5WdjAnVpBNBNvkuKSisLkkcaCtavSVVEVLc79CmS5U6BH",
  "key21": "fozXJWNtrqwU2UAvaJ7eXaLbwWWtTTWNK9WaDYTm6gALNicPRjKd6wp8aEXEEio4wbEBkcxpai1QDtmi5gUbTht",
  "key22": "AjJGNjsmnBC5QhBthf9KnwBTB2ECWKFCRzyrzrzTsbRkvSbDAmsqd6yhzt8LWxrLYXgiTvW7VGKdyQaCZpML8Ed",
  "key23": "2j6BMusEmzKpH5HPKcQghm4KFU1Yk5N9jkxEJz2Pgpn43Vc1zkjmuU8YhfaJrUF6S1uX9H4zeLXbZ33v3Fby4Fjf",
  "key24": "3ehvbDLjT1v2a1ysgRBrguHJWtp9SoRCbadq2t7r3dYgGRVCnUpBVTGnZYRWwaaK1sBubauqi3tJPrBvpLo3KuPf",
  "key25": "3VsBhQxMwTW1HJwbcT8iNmZdagGLzmwAgbYi67HT7wHFLKSHJ6YJADQ7S5dvPDWNpcFUuJqnirvctSfx4hDiAcxq"
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
