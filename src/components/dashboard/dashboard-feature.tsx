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
    "45uAmXCAgXaYKEQMVZPrcSJkZcQPA6enJuKmRMEhcqUPEjrx4vcsoiTSAYD3HsC2dFYWo5y2cVexxJraTBTD5CQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nkMxut2Zr2FfcvEDLruVFQAvxzU7sGf4Jojac4sZLyzF4UXjwjAzEn9PpXwhTWRJu4ErEX78QTEPTawqVLC6hox",
  "key1": "4LSUBzYLVVfiRfsV7EVZL2TkgidLnSuKPzSE5sqTtvigEJbSuan8eRkoNRgLfdchT6HCbgFhX3TwZWjFt5Ud5asT",
  "key2": "3idSovd5vGSfSwNhfHAT2YP5Kguapn7wvB7HXrJZefzrDM27MFSNwWFdEXQwxZnQKBoYytnzizhAhFpoqBP1Gpg4",
  "key3": "3bzQTcQw8kRVj7mCh4PkiZsGUYUq2M8nCn6XWi2xXLcaQfYBvN8NR3XBJpPD469RJtFrF82NXS2sBzYfGYQkt5fC",
  "key4": "3rCpBKJ6o2zurgL4m1viU5HEry5R4naePGS7JHLDbeBLgJoXbPBLx4ARkGRXP1Bn4uA9YisS9i1wLwv7TDMWbmKD",
  "key5": "5wbhKhHgyRq7W43XuNTJwwzZqq4aoetVQhsxBNDq917MBZsegqtY8UHmqdXTGnJBbZoQ6LcwjnDn8h7VgZvrTzmV",
  "key6": "2zWujY4F4tk6sWuwYjTbHwgWSqhkYLHdKJsH7zxe6JLphM16KBCkpL4nn9YH5Fjij2XsuMf8P7hBWA9F8hxuLZUn",
  "key7": "2cJS4LDqPmrLhhAEp22WPRXbggHqv2JJoDqB8AYZ11TQjG9PAhEhPo6kdHSH5AAR2eU7s7o3NaibCby4FmpwDQ1A",
  "key8": "4RnDEQ4BUzdu3vgiZLqwnhKDNc3V4KRB94RME1FR5uWUKhSq3RTzm5NwA1m1Zy74qFhVr29Q1QkLhhCve1Pm9y7S",
  "key9": "NnWbVnbQEBnSttzULF1URyysmbkeYAHPqxioDj1YgdPeChXenzLUWfi2rz69DhPzrWE3Twdme8tZb1SnJQJ4MCe",
  "key10": "AiXkBDc8K3pR88E6GUZ5UBbbPTXv5yLHbBqJUUq871t9HBz8VZo3mAcrpgCCqgzBcw4L8YKercBMCDPpGkUGkCA",
  "key11": "3fkFpCes5Ni4dZgd8dDGVzpjwvPzFnXRb1RXkh1ymmWbp5frmGSHCCAYL5JEaRgYdbzmcok49K4ApsnUr7cLBkki",
  "key12": "5YR3JQUgYB78hByUx2B31K1xFJ6RQbRPJt2GnZD8rJgaeiuUHDTExfnw9wmEhiMGMLZAM4wV1HbcqycqWRRNAWD8",
  "key13": "5ngWKt2pRxwEEbxxB1MgUqTuVLRMaUnSAFn8gTzvxPzNceGW1GwWafiycAF3GntVKvkFH37JFhVBhV18T4G43dsf",
  "key14": "4SXHek5eeSShK8KfmL1W4dDjAxPcXKq1uHfXkMJpXQEzbjbzB8Qp3p4qergiPE5A9GFAJdNeAKxZhrqmHKtVG7R4",
  "key15": "61TvKRhB8WEZ8HWFfSCKXuxtPmcCbsxrmuTiaQHBeUm9RTRA4NKKRWPRyAHM8AbWjesQrDmoJC3uiZ2q2cVKwup3",
  "key16": "5JmyC3tQkrXJetMLdGD9MEoxWYuToyRkQhdQxpErEZzs9SBCBSPktQAkzSW5xUwhk8T1Hrtsr7rKpTRnB3zni8gb",
  "key17": "4GwtYyc6oJczLxu887ysAdvjXe9RKBVxCti25FTi4JTegwfPCPJHMg56qp1tX2xCGBNJ9Cyws3uDutw34r3phPzV",
  "key18": "zUKKPBuFXziqMr6VM3jpZHgsW2aWjPyGbmXhtMcB6rgowbcxiU7RpvAKYLshcZ6Bf6TnLo4PNSLHd9orgsFYZ7k",
  "key19": "39TJPBupHmoLYVv3ry9NLtmrZLcxEATfA4TSVaZNANemgbwwQ27FgGjQP1GMje5XZxwEjM48bJ5iCH8LefM2dp6h",
  "key20": "ExbmDkmvwcGnmHXsqepvPcnxxcY2uSE4W6m6qWMVQnD9YxvCECC8ikym2wZitGCbFejEuoxyKY2Q6R78SvxsvkE",
  "key21": "5YbYjLiXg6LjrB3rx7FYYHPMFsrz17FEVRqSEnXvAwAQkjRGbZ1mmyZUmGte92voVXZtdixVghUBs951V2fBPmMY",
  "key22": "2NNMUK97oexxu62LrCW67f61ukrMb2aefWXWhJQVcLpD1XjpGyHjmajTAUf8G3HTARFah6H2bjhdqgBWD1wjQfaw",
  "key23": "49hZqRrfhkZVDFM354JGKaYQSQyZ1Tao4KiF7vM2zm1FUhYjNpFjyNy5oPcqtDro3cG8gMYQh6JprypVFtaM7UXJ",
  "key24": "2LuuNBJ5wq1hUhV56Tzw8GTKgvuHwzGNmApSVxQWpiavuuMKUP81nZ7oYwAqQfYHEUCHwqdjXAQccBh1wWQBDSVy",
  "key25": "2sSCvQFznDfDQgHVFvgyfVhdHMzr31PXYLeLNs8B7ZcpA1xKR5wgKkNCs6hib7FbPdDiSs6ZxPzf8CkFHnh9AFWC"
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
