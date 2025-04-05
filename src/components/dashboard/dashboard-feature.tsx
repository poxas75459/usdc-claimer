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
    "LDGV6fDpM3Fs328E49W6eEoP39H2cdLwqiEjwacibKQNVMMxrhL6hFrqLUUh2tL7n9WUp6CWa7VEdEW8XbdNDDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BKdtPDb4U7zimcTdMQ62DJFRgGJpEEnbHXKfSM3cDuGsSeJ5TEcub5hqBD7mv6zPMTf5MwcMPfHKoTNitBrWxJd",
  "key1": "5JfjMpVQvTYG6wLwHa9fxqpJuUycE6AkgPAbnLxkckiRPfN3u6BscYMKWHL9vDo1VHhR9US2MsStjXPTM7DRTJTN",
  "key2": "5n6HudEZSQeFoZG9Hg4CMcATNSM6YViAjjQCoHqsJjrBc9Tcj9EwqTLoXw5uu5uyWGa12BCHpKzAqYkux9LKJJ8X",
  "key3": "5c8cb2n21HbmbzZ64bPBw5P3qDNAqkgKZX98FFwXAv7mmqKkdvxXXorFxQ9eWwdXYwwrjHgPaAGsvxyjZnju3w6R",
  "key4": "2dLxir3A18qUhadWZHkAq2Azk58xrXubd6DA75zf1YbuYGeg12BTG9CuSBMsaRZiMmxBH3ybw7sLwJpqvLirzXW",
  "key5": "38yHsvnZWsjXmMiSxEBGTjq5rD4u4DVZbCipvBzP2rcgyoHXCheAuRxKSduoFZnxoHR2K4PX65Nmn29utN6416Bg",
  "key6": "tZvSy4q1UQopsrURdtEq4WX6u9Bx4ML2dHd4mwaqVaL1otNAt4Y7NX8zcvLBfbNstxnivWfRWuN2vabX1LtaZfq",
  "key7": "2woxGJSo5vsBuHXdDkC5ekeCHjncSvonYCzx3kM2hKJF5kBrT3DZdx5roEsCrTWw9oby7WxkMjAg6YFVpxUPa8W8",
  "key8": "2WeLNZ3tM93jq76Sp5qLqqfLvAZXbpfxEeJf7W5XsFQNeg2zXGbF47bgPDABCWGFUKbB36xSXmJzxXXxiFFs3J1J",
  "key9": "5gfQ64PpteEbg8Euc1uWMFdsHw63iBZt4nuDSQryLQAFFvMi4GrY943aLgBKbYMHPEtXWj2XizjkinmU6tMqEHsZ",
  "key10": "46tS32QV9GPhNFDrAD1RFZxTdDpPnquXHie9eUGf4QSrjoh6iQ4sLfe75VmPoY3mhirkmYpJQVAigoaLRPiixwae",
  "key11": "5yJjmKSCdKbSYnJAmCVhWdDgYPWXqWpD7EAzVJ1PCEdKZz42KRa37vxGD5FYaQvuwcoYVYb2Jgg1wrRHB8yWHXRg",
  "key12": "2QmbAe9pyxQtEsYgaatAxJoMxoZJEzZDCeFBT9EcfNjd2wPMeqEyS9xProJjS8d9evJjSPrB5P3sFDt1DwA5biLj",
  "key13": "2KPQ6dJWsD1Z1J5ic8WWBfYZ84ZksfWtXrSm6SbCV9m6hm5j4vUCQHSFRm7rYcmYq8JLVaEYvFabYi4XbMt1rKDs",
  "key14": "3a4jVEmq9mZRSGdxQM35eheYVFJ9ci2SDHB1FDperjWDZ1edGkq2UdKhXdoKrJHCHafFmBpBja6jpZ9DbRUiUT4W",
  "key15": "47B1RvNVhB6abUzqk237hyasyo9T9HzDhbGqihXb6qAwUfEmprsDYoDohFwZh3Ha2cScHWFAMHSV4PwWYVK3N94E",
  "key16": "6599sSreBbfyomfvhmdvqhHgJGXgd7mrfaKYPjaT5QntoxTHH41tUZYQkvD8DaoVfLFoofvhyT6W1VUhMdbRiRA",
  "key17": "29wmZDhTCQC5nEausVor8Vh3eS8MACfYugpdpbNDt1FR8fsEVvcbyxjYUocVCmeK9DkdEpJDA5vK776ES11HH1HJ",
  "key18": "C65V3jh1VM7Ri9dUqUHi3677vJcv6pefRd9wzmFkxoyx5HcLLGKYiMTtAoz4HGS75qpt8dAc7EpPWWaawactyNy",
  "key19": "4GpNYPqhjeLuyvEwUZLYRWmGJVQc3XeNALS2FzavJJ1uQ1nRXdbByedi9RRZLBfHgR2vBm6C1Qsh7CjPBQKMmhFp",
  "key20": "4pXPazSapAbnFunWkmTgZomxHEV3keWi81WqHVWeXBazaTvXB6NJhhaD1nLmep7xZudWrKovtmGuxfrspWRxc3TH",
  "key21": "2MHSDihhGrNE3zc9hi53gt4i3bdR8YiKU5Yo4A1ZmZvgATvjFG7sYtXiRjBgtYDQm7FhC2NbN3i6nbZFKQJEgKTe",
  "key22": "2fh1sLK5UqFCSAWnHQZ7bfunw2oBemVoH1r6CkFifTA8SbbWSpPFQZxXPuLUJ2vsJyEwi2w2vjGPhcuXWpjDrG8B",
  "key23": "39r8RoiZU1Xrb218MHXsjaxCq8Tb4ajSU5CbdThnT5sccWWTDwvUg3ikvoNH5w3VeUr6aP6u2r9ebrpnhJtpx5iT",
  "key24": "4kue39JhUrcVFhfTZPXhyfgzxE9gQDw1kQcssL2PXESGkXEQsAfXwkWEc6cAyi2Mzu4siAMwf4PVo8wX1tv5P82g",
  "key25": "5DB3iYxwwY2jEVfc3tMhgQAdExu3aT2AQ2Rm2vbfUz3vnw9QrdMzidh6qt6HkhydG9n2BDXXD5nUKAo4WkZBukJG",
  "key26": "2BWduzTEu5PD32qGLjLrZ8CbgbDxnZbsHPZqcGs9MbkqpaYAidhPz4AsQfwwWnRrrKFo9JpW7LXTFTjTHF3G9zAs",
  "key27": "2bUziFUtCAmJDLZxT1bxn4gCKYeMoiM9RY5RtgxFoFSXFVJapw4arDWjFd4cNjnM6ZWvc7iuy4t6hFvMTM2fkJj3",
  "key28": "5CEP1D5pvAo7drtghSXQ6oXxvio94qZz2vJUgEibaTayKyd8opdQHy6cmor35jRdBb8RPPjCoZi4WULmxNqwfXNN",
  "key29": "3TkG5w8vDwBh8mxSnhNjVeN5Ma3GWa6HGpz1UHpF3FspcxWZ55Lpik4CCBSasFKF23YSHymye5GuJP2aEqiVuVwE",
  "key30": "3Zms8c2CHkKd5ufkz5tVsbqYLs86CtVzv6SbKGJ9tm2QGS8m8QNU2WHdt5DsoE6EoBJYBegcSP17XD83sBG6YLrb",
  "key31": "E9aoXHfbGJrMp8p8bEEYCL4k9Rdcso8TQxtu9M7oDAZ8k6eM3LJRe6Bafc3fYiHzGJZY8v4rxAx1D3htC5hp6Ut",
  "key32": "Hp5tamECi9ruPGk2Xxf6SDkHDwkQqcbd5QGXKx23K3bbuXhcTFqUyTUvNuLVTspg7uWANNn8t3s68CoFzE541gM",
  "key33": "2MDo1hyzird5ceyq2ULucYei2VHpJbAkX2QRazb1TwysFrHx6oJCBkachxXL2eLVRDQpYnMpe75SYSvwATwSPXRw",
  "key34": "3EPW6e6DwNVmaSCb6zo8XPLV9KeeoNyAyB1N3sEDxe9gPQzmGnYLUYzG6dpDqJAZrsSkJvouBzWyZdEEAKhNcpxw",
  "key35": "24nrhygBSm6sJnT7KvRzQC8Fb8nfcyQEf7AaVQE44JuyfAtBB26JfXyaAmgYCnHKunVLrr6PVXkpDLVufU9S4MKT",
  "key36": "2XHBDoiPAZnMgRQj2g57RD28ZHmUtfWMNouVYwL2oStSKwTAmLXYpfjHjyFdJ7NaxZymBw5bgvDuNDiLMbFs2qhp",
  "key37": "2jmWtkJg9dhxzo4fud11LWR7c23XBdXhE2xdQ8oBi71VsYU6j5KK9gRVe2nkZic2rXMVH162fA7ouMvLCbDR78XS",
  "key38": "ryGGAm7UYZPVMkvwPSjdiyk8MC2jLToMzeohd35bmhuG9f3t4fJwEfBoJpKK484agiJvcaGbh6Ms4hkM83CnMBX",
  "key39": "4wD16GtUS2wfFT3bm2iXbQhauAz8rLt6yDMexsFdd4Ef1f4gMz4t9bAVMiWhhrMtZsR58rMFThBfixLQf1j3m2Bn",
  "key40": "64Kidcb2h9zEfX6fCjpVTiHpwHRCvaAvkdayGXpDwHjv7rcR1ATyi6eWr2i1ZHBEXuwHzQBCcGVHcRT3BKKWWCKZ",
  "key41": "3YNeKzaJNXo5TSmmCt6zEBZAVaj5suimAR2ZmZUAVpMJoh4cuYH5Y1tBwTwSMnhivjLccTqzDNMV9cFvyLhgktRr",
  "key42": "5ndCA3CDf1RE9FKRUibafu8vvAjcAqTdr7UmgaZazLJ69ZJUHg1ECt6yXYTmyWZMHeYUpPEdZN5L9GEwbaR641pL"
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
