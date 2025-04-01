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
    "Zrj6tEXA8TB5e7yfi3cznkMt3U9FwtkNPsRthFML23eEtP3ZWYyTPhxb71SfqMkqMTjg9dmVrJqvD2cPFmnfzQD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Mi2iuyM9eNtdvrcyqtBLA4FENXSsrf4GVmcnPc4WesmxCDJBZBXABqVE1Ycnb6rb6G7e6Epay26Cd6TvkwkdqXb",
  "key1": "2PfvHTw1emJBhds6pMFPBbxnAtQdLywAsxcXVYHZzh816UR5M35rwokGaGkXfaEo9mD7cUzZBzpUQSegPG4LmnEd",
  "key2": "2ei236H5hZWW1j5dbnNiB6xVRuUKycvvJQ2FzUNRUzzxZssFASwv42H1Pd8y2pbnLV3vvjpQ9iRTnbwUnKT6J2tn",
  "key3": "Xkj7fQtKVMTnkiFyFMaWmF8aEMi4xf9GMBxDjwsrHuvGRE4Ar3pYYVfGPBMQN2RrgbQcecgfSbD1Dp8qwot5S2J",
  "key4": "5EAfU5cv6xhgWpvxbLig7rTpbcxgTDZ6VGTyCegnKenpNkCKiHs6JbJctNTMoSUrkDodq9R6axxvwqcuEuqShb3B",
  "key5": "9RB8kxEbgV7nNRpXh65xx7WHcFkPAAayhMANkALrKGKogME2aFYbL71TUsNa2Jbd4mPH6C4bDyCuYC5vAnmn1jC",
  "key6": "hPBfVrXYzU7dsPGaU2UkK15x23vxEvNHiu1nJWkgmEPMMJdaz26hMoSd6uGYcLz4fiLyXarksmB8Dnb9XsbNJVo",
  "key7": "UCQ4UFVfEQQ67apFbou3H4hgRvwg3fuJB9jMq3wMfxJAtFWSXLCMHg32L3sM5983RQVgwDfbdWUPYz22qq5R5DQ",
  "key8": "biqmYNQWq5L4oaJgxwvjH1jN3hTDNLgqZnx3a2srWYTCGNCxnVBmkAPAHas62YMq5tm9nnewGkMDXax6arQbLsP",
  "key9": "3VKkizDRN8nTwbcvKwijQFJt1EjnBU2x5LdtbgfPuSvVHJXYoMppcS7vTCwNHpayZSzYrb1JoBQT8J1freMf57LJ",
  "key10": "5MVs1h4H4PDxFjE5FUREEAwcppZQsM6Uy8xmwvHJ54zfegXYbqXvMNzz1NDGgxCK1SykBZGpGEoxJoWp3nuGkTVT",
  "key11": "2PbMugL2hxxorZnt1CSgnJRwXeMNtJyH6xg2HBfM9QmoMq6jeZ8sNQQUywi1XFPVcjEK2n8LdzJx3ENk9MxBMz6A",
  "key12": "esd4RYaiTN7WPEujPYzihMp8jSayD3uiVLQyC27FFjQow8HdKudfpHYpMpsmfruWHbc8NQBBvcAuYJaRFuEYXbD",
  "key13": "5FW4vSCbfuM7iRdjh1roocFBkreSmhdxRRApE4H7C9jdhEPMsiRTQSjzhuf5uVXgYbMitr1fPjoFqUW9YxdQi2Db",
  "key14": "3dh2rnapoLdxcxaNx2XsFESkvCJsVSEoJjzKNYHEfQakMTcMScKC9twnrzQ2w8p4rCL2shZdFXc6LeAsm9sNXgoi",
  "key15": "3LkEbxVEt5w2p3ePZRzDoPxbGePYRixWpFuQ9Rzpn5rXF84gngkEtZbhRjNYbHvXYGe7SXQNMaraGmMJagQ3v4Sc",
  "key16": "2hkk3WzYi2HXyuFvQUoEVywTCk15ajiNBkTmk7jo2p8UtEau788LQ16M67eFGACX6jQAq3ZKJHXY8ipuG5ZnWxN8",
  "key17": "61XZGi4GDEZYrQdChPQbTVR3SsBfY9mDFtAj1z1SRzibCaicNCmDkEdi4jxFkCRamjxAffh9sUzNDcCbyYvqtsAx",
  "key18": "5EycJ7CjsnwvK7nAa8Wxm8doSkGrvCytoSEPWFHsAqTNQT4NLLyiYAFYti7EQsePdov5qszRuW8csz5N5K6uA9iu",
  "key19": "337NtHFLX2kw8vwZGy9fe6WRJdtXvEzjsTXpUKfyWmLiNqjtdnBDhjWqzHC8HiGXcrbSHLQYFVRdAvkHm723AkX1",
  "key20": "4625JVjZekfXrc18qaxFjbhXWRcXggFu7EyN2Njq2VkVj9TbwjRYmFYriY15KBL3RmrppVFQH5g6k65MRV7JTBSY",
  "key21": "4uohFut1kvQzcB59uXAdbRiBkvsxGSaGHh9jxJjqEF9Ka9qSUS6F62x7wF8QjWUXTT8Kn8YwjVuhqhdsk3kgopry",
  "key22": "3du6F42MfuaTVoAjyfJuywgvp6J211aaYSQYGCnd7ddZMtduDSnB66FdY2U8t9KjuW7qHP2QEbRxxqhszeba9Nh",
  "key23": "4RsuyqZf31hMnUGjKiDaWau4dtuPKstz3YgqC765AiMnxVXWnx7fSeiyGWWQ8RjfuqUyUFTWHmQFHoiYGkERgShf",
  "key24": "3EDRP8mggLLigumuH1q464XpAvaYUR7QUKFhLrzYCDaTN3JiWmfihoYH61DwkLRTS5YgAHzKm1UMP5yBn7fUZB7G",
  "key25": "5WfPWnW9PmtY74tHSmUs3ZhEvZ53AEgnZynDJd179pxPgrupz83YnTibS9nUnqKczrabT7j1giUvP5izyAcuDxXY",
  "key26": "58cP8DhbyoPpFtFw9yYRbQzkeG5hv64JuxLthBDaEmRCBmf2NeANxE4KdByqEoAyEbUjaKdfwYsRG3miMFRpWLBd",
  "key27": "3aPJAMzjY8Q1shXhTiFMKdTwSxPY9bCHgX8qBFzQwKrC9KYDqjf2BxzGKVBvYpxHRF7mjYJ3xLZkQxisUWB2vR1d",
  "key28": "2YjpoAWAmJ471KMhQ536xA2xL6VyHSXnQqwY41oSqNDQEQ7yHivVDnNJ1uBtoPo9HknXHeDDFKEccfueS3yLZ47D",
  "key29": "4HgG7Ki3nj6tocCCnFDrz5w1cUEZcMgi6413VKqkMyoEp5psbYdg7vKYgfiiLfaeX2uoNERknZ78fWD3qcPf3XBU",
  "key30": "4ZAi8ntqQSbLEHJCS4QEtD4QHQJLkrVcDrpDXkx47sV6LhhS8pKXVW8qN6sYqJg7puiCky8gzSdSaew9EmjxNrQB"
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
