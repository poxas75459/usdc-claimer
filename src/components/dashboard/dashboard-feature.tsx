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
    "2CPKG6MrwqbvRQCJVTi8W9Y4CrhV7ana48md36uAWAqkdEPLVtpqduQqXtY6qWwyHKWzHpqmSoQnoGt3eJPL4ADK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DjesZoN2zauMhrjUBXxGiPBTbPijRNUVUSM6yMB7vnwyLaToP81MER5AACjJdvEpxiSLP27jyuzGrQysq5F9zD4",
  "key1": "21L8p7p9yJRe6DatPCsEwjqM8QGFRic26m4XeqCwKH9EuNcLBohE8uPeeoK72ANEjuyCLcUQYrisPnKG3crfWcwU",
  "key2": "2im9dSX5PbFpWhbe4HKV6MR4WU2ZHUdgDQthQqEjExqGR7vDpFQaixLSMDTqHkvhhWKB64A3uMgHEWj8JAAfwbSN",
  "key3": "4USLrx11JGKSgyhH2GmeYCS1xwoSZDE2XnNAnaeJkhQzN1Th2Yv6TCEMP5SHRFDmkBLoPKTTWj4k6AqBvqY8gM91",
  "key4": "2D2yLdPN7trXFdxBgjfndgm3Ndu2hUMyR7AUAbYTPLnrN6TWPXKHDqJeV16YMwv2DJCGF3gB848U5mPdaEniyki5",
  "key5": "5VY5XjGH8jTJrEmNj7UYuBM2WjxyKYgHUres6WWT5WcgWc5o1iCYAZiZysSsJaNZxywQE9di4BnTrD1sWx735HP4",
  "key6": "66z2CjFiU3wG2QcwsBDUX9L5TV179VaXn41CWvtnRXC35uK8bNC4KGdiDt3rHyVEmp2eGwJ8HZMJcWKXZVr7Luiy",
  "key7": "2Va3A4XUZuukQAUcyCHc4itm164LNmYmGRDNy1kEAEyWJXQSRXMt2cLiB5ovJqkj3Gyy9cHVSsPFFksWCJkvb39G",
  "key8": "3rYvrnLzBzt5YgDX5ZBZc5dP5Rtui7ReHCZkeukjxnqk5qrJxnhYfRiaN3wExqFJuYytcwYX3HnxGW5qTWmtCrBh",
  "key9": "2Nkq2RuhfbSvj3ehKNp2ayPzJKBwT9cAWHdLBjRwu4fkSHtqNFCxnDw4WJANEW8ToyhfBfkps5bwooFQ4GyBuwuw",
  "key10": "3j9QG8rBkYiGmD6RMRTXoD7WzHkyyzRqUt3Yri4G8DzTBaDEseBhYqGWCzDT5SC8nuip7SWzB5Ga7G6RGjmeEiiY",
  "key11": "4JRZ5HoFzixvTmPsi6wEeejWy5UeHbadGb5jyDAAUXAhFqDcPAjBBDxaazpyaH9VMQhaeqH29TBZDJNgntMDaqiA",
  "key12": "3tmafiEWvvtuEVa4nfRkKaTzH89Hu6kpkmMyJ8vn95veuNeExt2yboWsD8uADtKjaUEbZQ3RiMc7mJZZEYF8iWh3",
  "key13": "5L3gnqSkULsW2xzj2rvuiC1VqttCCnDVCwhw3NqeUksELXvaFV61jmQMG5TS7f8nxCzXtenrEuyf9cFnDG7ezCXN",
  "key14": "3AL2pfaaPMrWtMvea42tEnYdPCubrhEm4gM7DbvN1KWFM43zVhCcwFktVxrWnATJctYtJCHEdGJr78pc65uLuqVZ",
  "key15": "3jeSyLCRNxMuTFjuVHksnfEi2B9eKAftsqWeLuESgyFAp88s9Rq3YsWSpcVf2u8meKH2nc7XAT2eEb7vfgontp8q",
  "key16": "3FBNtxffUgqkzJqmW9reLnAnPQQC5yPBHUkAr3PWJxW5JfRgQxfyrLuHmqvZ2J7goRzrwavTM8Ru9r6NBZTyYJi6",
  "key17": "2FQLwmTvKBpUQA2gwDmLCTbGNvcMjKU6Ds6ujcbrDikhwoXKMW2dBCVKW3odta6jDr4Due5jkN4d3HuEvVgJe69C",
  "key18": "4zMWaR9jrTaijrfAZGhQE1T7doJggV4XnXjZNRsdYYxHqF8bQ8BaTZuEpKFMyB3ZsTGo4BMsW9PdG9DsEFwbgEHy",
  "key19": "5XXMhUtRn1Djg1HaLhte33M2Av1827kJ1CeCRTigZjQdf5Maw5ZRSZ8JUD5oTdLkXxoc2nZTVNsm99kGA8Th4cJ4",
  "key20": "2BZAXVrTJ37Pak18C1VGKz1vSnmmZt6Q79xmz8kTV1tRxnWBwA5FHQRvhoMmYaZmQsuAmjkvb6w3GNRb2oeUWbSu",
  "key21": "kThZadSTCThgiUGKCLuZ9aNxa7JV48sb4eXvHRmkLamaCBC18hth1Rm5uuad5PWGcWYT6CGb6pr5c8PFRmxdCeG",
  "key22": "d4ZxQuL2K9RPMRmgiEF1nS1PtV7DH95479PMcrtvX17SPLg3rfFNSPCSYr2StdoLt45omisN5Asci9kNkVhbAer",
  "key23": "649sDtVNoph3hxcRVTQ4XKkPWEtnQqw2kwW6oNinR4PtxPpxsbHCaxBSHCrQE4WCQdet1XcY38bfGudiYr5MSPiv",
  "key24": "4xe7ayZkoP2B22JwYdrWxE38EZELh1eJhGpAgUyhokguEXdXjC9avcC78BzsnLS9CMT1Fei4jnq2QcvxucZTv3wP",
  "key25": "27WM3ftjc3LhAVkj9DFWqC6eb6eWUkyzsApXViSi1jhvoGVYEdiE52TA2ia5udVrgsSKEDaWPq61xZLveFDRbJXM",
  "key26": "2Gk5p5UE5J26uCNJkNkCBuvJb5neGfWnh8axJv7oQPAgnCYiZriktySnXB6QS8RWK46PgUPs5Uu6oXsanrsxZVKY",
  "key27": "3r2MrjhSLq8vnFqy6mbq5cXddy4d8cYAGHDZtJHjvTgPbFDFFs2HWDpKzxa4Q6UTuMjR1rcAxwekKUvog6NgSw4W",
  "key28": "3ccLduR4Uxz52gcZ4eMBUWkNXwqMtzi3BH9p49Qca8oXc2kxSzqKYAiJPNtyDFzxapX2QaYQczhpfX94Z8JTFWjH",
  "key29": "2AbD9r96fPES8Yk3Fe8MrJfzz7CH4yuJSf8LBrbv8DUcF6woz2Cdtc5Z5Kok1yXMpv3tfzJNLkKcCrySNMHXMsvz",
  "key30": "3MpgXGCx12sEZd2zAkJnqTNkQow3nPGYLKiqfe1qVx7Esi2dnAUYmVNoYV7FaxsVKCkjDCFzsH5NbXmMGS6yX8og",
  "key31": "3uQgh3TLnUT6wYEC9LSGrbDB8ARdA44uxwY7WwUtGGgwEHmT19FGANUrgtgc92wxhdxFHnhSN7faBFxMKqcD4JQS",
  "key32": "2dyeterH8obtvjzk93KtpQdoQNCpxAzP5JryXDQL3Y7HjNfMjjafBVdX37e1qMxwm7oSzQARYqiyGunT65fJ5qrN",
  "key33": "4JGjntwZsvjWNXgRV8nFnBnySWUTTuuc4uwreb8GyfrZ8DUE7ctLmDczpTbGpTCygNUvY4EEMCkFt5B5oEFo9nXg",
  "key34": "4j6eANAkLbT31SzmuYFCQUGL51RNBMKaXxHJ8qyPZPemoqMzzfzudse4UsGhtE8fafuYoF1F19NawkjwBHfU4GFj",
  "key35": "dTUx4j7x6csTBQjppT4Y6bWs8Q1YQDXRV3iDEyAdnQb4ESRHt5px2hKEQJRn9e8mtpAVHEzCLQqG5bYMp66vxZm",
  "key36": "A6QCS9xLmaRCWZ8GnSVnoKstxj4c637tgsfpWixea84XAd59ty8rEHXzf6mUjuPwfiXExc881PfLy4MMzkRu1Ko",
  "key37": "5RE2sS7t4wcQwTE4ufY4Na48fWUYfCgJ3YEgMJFgToQDUJTn3CdBBRfq8c6EdwsYbED9QiHH6S4UW5dxqTBkj8PB",
  "key38": "3XzXfhxZSwWs2Ri2QLLoSA33oAx9jMcz1vVdxyJ5UhqeERKpMbgyui1duWiNGkyFpDqPshxxPjLhc6JU1REbeAb8"
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
