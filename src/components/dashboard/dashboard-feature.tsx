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
    "4q2DB5yic4WcFNqAtijs2LqH8hLBj9jLGMWv2W752zNg5i1ARg1UNBZH5XVrdRSq5eYVJi7Tx14Hu22HK2Zk5e7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wfvZaNwJthmgCBUGTXmRpXUu7Jb4M8KLGotEE75xedzUk46USPxGQ6QU54yXbWBxERrqRJsfsDdT3aHDhkNBFTN",
  "key1": "3W72rSzsoZ4V5KJ1XYSbhsM8TvpyvnKY4Dp67rjUxCZ1UfhpuLoiWv3hEHe9Ki9SzMp4pQfjjxuxE5bCzGdjB6nv",
  "key2": "5dn1MNgaeNEGX2RGLv6fnPESHdmPbM7e4hDzqPwpNFh7YrPzbqpYRwg25iCUiJWcx4PKVxjwkX982CL2mwhV9aMF",
  "key3": "2nbU7KPoK5yVAUKcXrijxYWCpEHYMLnWipRQfMd3rwDk5uf2TuDN64ZdNBLPBpdv7VykVJkcR8tqHHrkeUHNCGzE",
  "key4": "2WfiPP9N5YzCzAx8yRPa6iYS4czzAve95DyUgDK5LNwcK9t4Diix98rP8wPmU9SxEM8D3vPVGeg5ahF79TB7WuRH",
  "key5": "3hkCZV8ZJrj2NKre4XBtMTwVu8iu6FXFUGrrpb1gLeWgR5x1Zy7hoztwV2mrG3VDAGHqSCfJ7o5HUveB4ZfPNRKL",
  "key6": "5oJVEDPKa1YQz357rR5NXradnh2nT3GUvhSGqGWWfZ2YRQLVyJKqQAXQB88e6rbPx2vb7XdBtGDNUq4Chgs3kX15",
  "key7": "56ws2AdjYB9hscA3pMhsduchcfR66Gei7Ky4PmrLoAV1X8XPMVdQMiREAS5z4CBHpfbQhYMqM24mgfZgEpdAaHXN",
  "key8": "3tpHHRyFrRWf5WgL8K9WXZjj5XBsJVMjviqLgD4ANRNp3GAsTMdHUw9XZQ8Q1xk8yq8FmipKwBVjnSug8TgeZh1a",
  "key9": "3Swfo679eG1GLR9NiDeUUTBVcSnGJK4YyibyMJjGHjzLHcbqiXUa4G28PJwMdAFhB1hzzrL47JNie98r1ibSk8Eu",
  "key10": "5UsFPwm8cPnWpkGaMAHsR62iJoo8CPtH7nqjqkqTbfjK3soJA9ovvfUD2hDAwCQq1kA8bjRz4VSvrrAc5zhCo5Hd",
  "key11": "4LsvK9yMv7vARMDbxaCRX63Yu344hRWdH13ZZSAtk4UsdavSwHxmZPsgd1eS4KxDsqcBbjerSa6f5gWE2HDnfqep",
  "key12": "5Gmn4pJ7mL2fwdG7ahbeL4S4PAEssDzAAewd3TLsqDGChTc9fWY4ZcF5kpbe3rzJfEwM3UZsHNMwcVbdDPNCGYDg",
  "key13": "522zVCPrEzjBjEbPFW2mgTseqftoMNZafTh2YKJZjLE9pPcyk6ZMvdn2iDYf9FNKmdJHmrGZtdUwe5j7A8FxVNkS",
  "key14": "4Bd8uwQ1qnPXrjryPur8XehySKvCoo5N7qHYxr4snxg9rm9eLZAXzD7aPpHw7JUSZL98pFgTDLqU6tHkyUPQNCBX",
  "key15": "3xjJ9huXMp75guwAAE4E8Pu5jKGwMTxbe7ELbLpZgP8eDAEZ9Avu8MmeuFXqzMG8FMp8Z1iD7XEYv6UzJ8c32hyS",
  "key16": "XH6XWEndnH5RNgRHviDEe9B8hfquoiFGshRNgvG7jtcErwAdDv9j6tZ2Nu6yXp4ySkSjZyHZ8VwKTFrDC3kZc1z",
  "key17": "4kAJhPE4jj1t4ZmvJtc6WtNPyW6QQBUvWAeTMznrLU6RHzX9WywJMaxAxv9w8BmFXhXaxvxYVaXyRp3Mj8r9MUnT",
  "key18": "5HMWU1bJC1c64jeE6pnvUHBnFXf5G2WmxDVkcFWWgaoWRFg7LmKe374a4TaRaGVAT3vUy1LCUttJs6rwjUnakYAJ",
  "key19": "42ini4ZBTwRudeG7cUBK6gzqkKecit5gcodSdUpPKhH8v4GZcroSS85FMmyYoyFpsrWzuQX13XzRSLKx3os49Fuf",
  "key20": "5XxicatkrykyExDav2JniC8AM22QmGMG9wmUNJht3dvvdJ8o5JJbJP7hMhhDmetzHcN1PTaGY85acZC2wXVZdooN",
  "key21": "4Nh9aQPQPyzYuMHpQ1PTRb3Kkr1arNMnQL7bysGQZpKwK3uHEqTLVbuqwM12U2LUm7yUHiG6eLZt1PUhbTTTdhGA",
  "key22": "8o3Azq66oN1EAjbTnqWZdPsmigREpqhmLnmYctCaVgXFhUcK9CiRzuWCJuKorXo34QdpM1eeWwFE9xHFE86eBqj",
  "key23": "51FTUUVVLq17AirBcEeK3U3vPfPMoTbpuaJzWPmeFTUpXnpJ4YEE6UPxTxicdm3FWCzUjaTN5VYX67Dzm5VoJ8tS",
  "key24": "5pVW5W6Bnf2yiotfrkfEDpV8JKSdkEbXeeuvCjKsaHbGdHxXHWTZ1CypyBSFkuBQjYv1PhFL9gKy2oEo8smnTaWH",
  "key25": "bWxk6hbRYKF3Usk6aSTCep4twZcXcsMiMgmT4YakhKRb3LLBw8TBb88V9m7HoUFLAJmNtRvCp5sRuZsBjjeeb8a",
  "key26": "5QQrF1XpycRFg49RF67hgxSbef1LH9NyeXKnMgnDbW5EEZCrkN7LF9uyuWU4uSgZRjvFRHLxXtuz6hWCEbZY6JSR",
  "key27": "3ZxCYpuAe8vJAMGYRJkv5VKHrcpA6PDHS3erFm4J8s7Z31uywevh1GxmRuUeEzgPW7WZxyhhbzw9sESrHMhtAkaS",
  "key28": "54k5uoHCXA9jqibZfHHMvbwvosZQvM4sMqfWow1DEjPzQBFayDoeZdNwcDmCaHYNjGtiePkxHD2v1F2xc4A1Jgq6",
  "key29": "5ojyn36btezp9N8AguFdhRLUNWh38DFGkSoLkRuBrGRrVt3c6omvQL52GTk19sUmiQvB3kHH4pN8sYdaskhaGPJ5",
  "key30": "5c8KFR3aoYg8tMCc49SRYKcVsKstQpJaz5u85UUU5W5T5mJji2YQY8noCkmxM3t4fuPAoMjagt6KJaEuvw7WkZjw",
  "key31": "3PangRcjDXb9m725FVMpDDi36kc5id8VhD76rkwLt5ZH1zsQMSSc63dspixqYp69CWBksVi5fMyawpDKyB4WRWdK",
  "key32": "5TpTDn9MuQFC1edqJ9aaVJznvXxc3cLAAQydxsshjy4yrFJ6dvu6PTKz3aW5K7dS33WtqnfuEsfBiCx7EYBy3AAy",
  "key33": "3buvropBDencM9wmVkyJwywUYFokRyBqk2wMwRinFqDa2Gisdfmjhm1SyFgxmuCR1YgnShkQvotn4asF645Gknvs",
  "key34": "3op724TYUbESWf8QgqLPS4WzAGfQrkuvkiGnzVZpQfjE7UTWUB8nvSjCnPTeyTHVrAKTypASLrtf8jiKoC75uqWV",
  "key35": "Mpx43vMKzm73UgvqUks2hbxs9L4w1xQ6BN8KMgdLDiHuCzk9TxV6GyBeAsUhx2qfSwAAtB6uT4Yy9oKLKo4rWNP",
  "key36": "Cw7ovgZckpcGbpTozBeXFkk8fDMvMgnTcAnf8pJT9YPNSkm5vDfg2LyHNnZT9HCZkQiLHGRfa9tJ5Mp9TpdcpiG"
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
