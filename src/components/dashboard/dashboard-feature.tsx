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
    "5VYdxd6ck4brhH9e3gfhjKiXDEWSPNds47Nwcxnb1RMs3niHe2RShfSVeY5kxMzzQsxzr5zeUhaRYWNjsvgzbFEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WfqkkuqFzLpVhkW88uQKVfkUFDzBkP2pZQnFSeoNpuvzzQCzrHm3qsEhb893NA6UnjqkbaVhL5wDakZbGoDu5EY",
  "key1": "2Db1ezye3u511KQL8GcjS4fotccxfu1qCh611bipWctpYoeNXtc5V8ebsrqn3U6VTB8TLffX4iquLoEiuJ77V6nS",
  "key2": "4pLLNtkequVGzkVVSFc22SDpnnQu8hmVLRSG4HJuKBsJVJHLMENiTaYjFWsNrTQZ4fB9QUHwGCp63cgKZ7yENpnY",
  "key3": "4rUWGd1pTCp4hbpN2Yc4jZAH4qC3JqKqbNQSj8WtjHbm4ieseCLgNSGHKogYLbKdv516gReAUZHCEqzRSxd1DhtV",
  "key4": "4jq9rRJDWMkp5SWrRV8ibLjhhkngQRfuwMTBRrgDtEADRXhaq1ZoV6Wxt4xYk6CjPgEEWVvch8Jzb4fsKmWoY5ZK",
  "key5": "Fj77oA6NAmwou449Eut5NUGhTDhbZKjj14129kxjM8F7UprETjnrE5uo51nkyUyXZpY5R87cy7nxcLdr5opq4sU",
  "key6": "rZhtAspMbWS8FZ74d5zocYBjtEKFdXSbJ3YocwbFrnossE91suW8SinHikAdJYshwvapqQTJ4P8qqohJuSPno2x",
  "key7": "3as3gBB5hJjffcZ5qgJGevx6UeAnoU8X51ezU2VQfdgE9TfwdHGHPSCrTjYt1uS2J3you2DgUdAtnXXhBMCEvX4o",
  "key8": "3tCK1sbKGJBdLCGAvE5Kiy1kFAHKxmhQ7PsJ2vCcexMepmfRfsUqwoAZTS7324ERC1Lqfb1tHWVQJtd7WB2KyMnN",
  "key9": "4KLD91UB1WzgqLdztAzvJguVhZY1RfrDwMZTLg1p5YGNwumS4sCFLQdTEBEHuy2pvDhpFpeUKcoBhcskVriHYryP",
  "key10": "3iZLscBLdQXyVYQiCh5pu8iw12EfcKUuZaPFZWCRmEn3hWEsi6xreGJKa55SreM1tKQ3y5ajsJ22tNaJHNw9io5o",
  "key11": "NMXpwsiv9d4bwkjNjA6rpQCFjoLSDFjfvahqQgLX6S72bz1grsJZ6Ho2kVdXxwcyJFvFWvcHjEFbHwCGWSMwknQ",
  "key12": "2vDNrbTKW39ztYsbMEZghopjB118oZtoDc5c35YBi7TkQ5NSxncHAYKYVejcvCUME3AHHr1ixvzEXUceV1wBdGM5",
  "key13": "2xEpFVpfnEMg4khN6mXFeMeaBDifTN7nrNGexoErJQfhqQsWpZweoZaDoV37CimW3BNkUAA8V28uT9NYpfp9A95T",
  "key14": "5j5EkCFZ5GTJLPFvrLnQzioPksUxDd4Hn1XUoQ2uNJrNebZPqng9i3LDLvZWU1tLTDV6eLkhoCxHyF2XTEkWx1nx",
  "key15": "37ApqNB6f6USr8GAA4mNhz42XFq3aTm3VnsueEisWWe4W7KKtBpktR8SaMayarcFKS32r31ZwtvpbWLoAHri4ffp",
  "key16": "4PDh2JFL7GpW87Q9Fwt7jWzc8KCrxpNB6xR8mNM4dxUq1st969o3KaqD6KtTrNAjV4s2HQ8oXmXBMX4PX1t7WT52",
  "key17": "2uMDnDALGgiLxNoWAQoxzHWxZh3CAu2w9CEa4KERyFJRFiozWK2DGa1xfKWFmfFUV8BSPVygbzkxMegZ4DF4QkNH",
  "key18": "4c5hDDgeghqrnYVH38fGHyaCRjv2M3URJhFqW75TNhfEjRnPPKnWbE8CtKJBse7rdSdySpm6S2XU1mgqjvb4b9nW",
  "key19": "5tsXCwFhsXdxjzLz6mxY3ieH5cSXdZJcMQnK7MivX3nQEh9FhodbrcEfhDV6GxMccx1WRB8ETgagFTea3K5KjWZ4",
  "key20": "282wftFMAcwc8KNJabYCL4piM6uBWiqwauXoBcb1aZiLKL1312yfxtvcSR5FbBVmMkbcHCosaU42kw9SYN6fMR2k",
  "key21": "56bFFwzxF99C6yFFJ99pcZbwKoRNkc2LUJh8HPjtBWfFt8BYngUPX9fsFWqaCKtweeEznohrfETa29sbVVfETFuH",
  "key22": "4acwrhuS2eDgDikcqoiFux2oKCDbT84DWW8neyCb9WpCHxsfckNBsaY16ive56h1mVJsx1DyExzbAqEFmq7ETxoL",
  "key23": "21KNaPhGvHz484XQXmqdxbv539F8E6p734v5vQznRcwNnvimMgTWEn6J13ofGgZBVJsjwkDsNDCBRgiZ5JApfJUn",
  "key24": "jqZeTLW3NjMcjqZ6i39tLC7dwVQb72zKcn6Po5Z4uQMDDQWxpoxtS9mXnNcfmaGCCpgeop3Wsh1AUkjrJbdykcG",
  "key25": "YMUUrBnT4PYSR8MuFwRAM9cHrWqqsX2W71e5uQsF2VYoPv4FGEgoSSDdJwE8HtU62tGBYYaPunMMpbUGU1t6us8",
  "key26": "3tTNWZxEtuq1qFqzzt6mb9jJtdsMcqkKACEZ6bGD6bgFNf88V64RK9UGy9aqjZFHKXenaqMD6ut5qbbUpZEbhy29",
  "key27": "594xuozWPpdvComzpzkpqA892bPDzjbvCAu8Daxws55YSdEWYc9dsfqZwkhLdQ3QfJskqieUVViAYbLAABvi91Ta"
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
