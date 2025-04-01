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
    "3xEYcVPjMXuGxrFszyjATbQK1c4rP1YeLtdtaKrbhCpvHnzrh596atSwprCbwgGLkdU167zHcizA2sPPYvxXVmkK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nwRXdx6wCdZY1EkDpuWYRq6eMzCSmjd7AWS64SqyAsz6vkSRWBdQCefodwkzcdNXNhANMoUYvkSJbdj1soHqj9s",
  "key1": "2SWuid25qu3BWTtKKeT8G6BqP4YzRVQ4P68xAcN68qrJtUSCxX3WFYBsPEGHUoSYCprx9HeST55rrtAsrrxfyeFm",
  "key2": "58wXcGEc4ZU9ZiFkhDBi8TsudrfruroSdAwXQwhugxbUBR8awadce7G8JVWbxg81x7wRoC617kfCaXCBNntt5acC",
  "key3": "46xTKhtd3JAQC1z894e1jKRGsqdagNhLWmbG6t2SXm3jpbHPNJLVaYSRef2BrFYyXrqYfR9pzvKiP5JVCj4B3X1A",
  "key4": "3MoA7nhnZZrWkyNknZB8u9zexkNbvtQcas5kkfJiQN51bCMJYLKtDnoT8oYrTVTmKXzT5nL4DdhH7DpadjooeAYc",
  "key5": "4b1Y7ZAx6pDyYoXYXzktSqhs7dQFKjaebSouDSFTJahz5jRu6ZPGHrystyrBE9nULhWptfzRP2Usy2xmk27k4muk",
  "key6": "2VGEzeQeU62eofcNFzB2eCmgGD8ne55h5CQygsfELgMKWkcHjzyLww4BhkakskEDufbM2EZ39LfLUWeMummgENag",
  "key7": "5EtBAiekuEVSqaX3ncnLCH64otXNjYUCrZQwJvJevNRg1hMscQq4RFGGL3ajFaW2XMRXrqN6uT9oAB3raiVDk1e6",
  "key8": "3bF3yxcjeTqA5DDywZs6HzYbtHj9MohZNZ5dJVLt2atyJNGVNxYq1aEcqgkFt6k9LFpHbb3h1gq7ZSNNbUvH1Hb8",
  "key9": "4MGwY6g7NgUG6k8dru75ra44B5gTDg85CjPCLrCWhE2dEA65NufBEHX5k7SVk7LeaFrP86kFefd1maNjkxd11tJj",
  "key10": "5iF9deXnZBBku2cZ868iiveBLPw9KfAAsv287nuJ3xKry62ru4Rb2K5Z1rkwmWMxi6qkshQZYN3FokPMBxEPFqeh",
  "key11": "5X2ZwQdQZ8unfh75VNcgEZyFgBRh2UsvYNg3UjkTXTm9L6BkTDWJ437jX5PXzRcLA8E2aZKwdxJ22aeei59FBQPG",
  "key12": "3gSEmWNnQBcY6oGeJLVEbK6XSsvpGEon8YXnnA7YE2syMsMixD5rDeLLuCxCtDMHUZCTBgTVZEgk1MyZkMcEi6E6",
  "key13": "4N39WaEsmSMuEr1A87khFgeYt5KwkK1NaED6e2Xm6WSgevjM2UiSga6X8rj4KjN2QwVWYj2kryssqY8PCPFYXqf3",
  "key14": "5NV2hui3WBFa6fwWwhC1Mg74F4kTrNMt5X3uQWQsWeG8k3KoSWEN1FP9cfUwF84vhotZMMMzAuhccJcgJQqpKcHw",
  "key15": "4u8yGJEXub5ozCBD7ygA9RaLaBhKhwCy9ck8RYpBX6Xa4bVv8Ct7QmWwc8avkdFadyYFdjmirBBPUL6MRRbnZh8h",
  "key16": "4X4p45fAxpv8YXGGfioKBfq4xVJ2cDc8MVLDJqJHvFT8fb3kPXh1H6v9kWVFdCKMtoZbVXnvYJ7X5FMb2XC7rCvo",
  "key17": "2qWtRG5vBjJrnsEr2SRH14hJkRoYjM534AaK7W7Y4gx3E5iL2G9zxWptv65vgFsbSLK9AzazimaGiFLNHPUTavW1",
  "key18": "2KepYGGsJJsSySpj2fUmtKiEbf8u7YeGjw6HXsxaB5tyoUaymqEeKgnKGLkHC2NcRchExhY4BJnD47Gjey1rG5r1",
  "key19": "P54EgjYdHTFcqnoJSaVj1VwoYJtR9u45mNYrYZBcecE8dPtznHqExSSq2bFvXyaSpwmzcwFfcBSfARRSmooXnE2",
  "key20": "2TrYpuBBfMg8kYy6m1h9pAU2jVL2tiwnAR64JKNzygneuW6m1QZeoes3ePz1vFgRkEP6gq9W6sKiBWcoLTiDQ5XF",
  "key21": "2bhy9PaXqkTSB5h2toCnb4TMiFy3MsiWbnY7emDwXP4xq8GZKWgwPQPyShsxEmm2jFDSS2zXFMnQSa4jyk1LZzQC",
  "key22": "4riNHZ3RpHcCfdfoBfHuSbgwLBVvgVrivgiiSNCVUVFreUQcjwgzroTqN9Jj5wCGEVHgiomGELJyBq2PY7KxDDTZ",
  "key23": "4pLJppKdDfbnSwMHGvznLbFQbgFLKsvu6VeNPHLSZwDwVcW5x7Bt7hKCtjdF7kRLATfaFQhfopKLxJ6gvymFSbfX",
  "key24": "2YYZ5YyXRMaukQK2o52nnUiR5xLRfzvGWgfFrd5QPKapnvzUccrYpVxP8T2h7nELwEGAfm5qjuxRsoA2FJWBF7Sf",
  "key25": "3xT1fwCVzEHqiCPTkZ9gcrEAwU4dm9AubpXLF3zNTPXtsDQa3fCjeLPiBSxjvyhidTVuRPGkQwdZjnu7gt6WoxbZ",
  "key26": "2yRtWc3Xmp3d2tuSsy1T7AGcmhbcEcqzk3SKMjmTQcsx2HDCRckoj6JDbmiMnWFZ2xQEW2gwx7XziScAAi1tqFLW",
  "key27": "3SSoxNJqL6fvCarZFXf2m8R9VUheeJwLJvzAUxUHbbCpAYTd74qDbT6ieHa9PXr3HN3QX6V7PNtFKX1J7bXtuiMG",
  "key28": "4SJPnMUVbBgkT3rXvJxqpw53SVLkg7z6rNK3Fdr2ygEPmqs1zdaD2TP9sdKsTVg93rzgHSWcknDKRy2Q7qw6P7MC",
  "key29": "24siyRDM9iMN7kEjYYQyAwj475g3DNwKmvKKP72CgmzjUX13nVUUC7wVA1f88VejjXb77S532A55rsSYpTxrvQ4o",
  "key30": "2nkKcggJ7cqV745f9ENuQz7WLXsQABEoAxL7Z5iXahMgKWPyfMeR2qFRZ313yCShWusGCnrpj3Qfuj4wbHeNbrP9",
  "key31": "3poWj4tJVgFfKw6MV2ST29deHqYznaZwnG8zQPqMvMhXkGZGyV8TYfKuczde6ru8YiuDxbEYk4xMF7vmJof5pisV",
  "key32": "3tcD7KBNsPQYZD9QTgmxhZ3kSABPucrVLn38CY2sZHVfw8Qyf6vBEDiPhcRHrUVkus15CWp2CoVcZF32kjbKLRw7",
  "key33": "3m14E5jFjyw4rQvo2W5iC3sttrr23rPApdhsSaMFP9x5eFwo1GbKRcuWNQm9Qh8pKraMrP3o8yFRKBYrhkd8d1Cc",
  "key34": "5G4vu3jLu7TLjtX9yT4uQZ1pMqjQ34ezBcvshedFhQy3m5Qt5r78YDMDqjMpEwz4qcocX6EPubJSeRhFChBu1HKM",
  "key35": "PuUqHiDg8AiV3A9eHhRhgBLmaaz4hNASvpwtjNVpHTES2TGHxrMpnCyZKgBT5GmtbB48q1vKC2ULTiKXuPMhqQR"
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
