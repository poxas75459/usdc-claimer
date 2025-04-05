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
    "4fW5a1hny3EtMvVnKKtyJJmEQmGmMVybzChL3ezGnhq3jcLR3NktdHvHJb8wSXGi9KD313De8rFRshpQENnifg7f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nQo96vLWmySZjPkvAn6PTNvYcb89jjCEKhsoMHCNfPK2i4S4AmNFKNSJLRefJw3njdDdsJHEmFUY2Q3HZ6edLnB",
  "key1": "FD1o8KhEnmKUVK2txxBoBdAKQqGhRH6SiY3vggGAjyUSZKrJav9eKDkEqGrVeSgpDNHZsxF3exp8E3fabJ1fQmP",
  "key2": "4Q8dKBRPnxrbAb1ENQQ77eqqvFEty49c1UVTJbaa2josGWVLyqkuijrxyy4Mt3uKxBf3Z8RG7AKaNMWa3RyyNoCu",
  "key3": "5Xed9UMBnTZSM78SaR5r6PRoCas4eVzbGyNpHknHfNLkcpgp4JqZh5akeKcsh4YXDvakzjBYyQP24araTJV2rDTo",
  "key4": "3dzv5B1wmn4t8qUyAaQXjBQhyT832Qw5WcSNejRZHbnmB9q1xADRRHQyaJeHyZWDoP1zbsWUJzvMk1AmCXVVBzxw",
  "key5": "5ZUQtciiRHjnKF1GJYxwmJacHcrUpnJ1uMrzS1QGyxr8KiwcBy9z6U7YmBwnAn5C9B2CX7A5zHbhzpxVPfKuvN5u",
  "key6": "3HdSUSAkt8gWQTntZD6mkGtTGp1ceBTmTykfRRoK8qrgBKYD6MK6nasZpcWUYKb9h5jonjAVEXHQ9rreY8AFBNZb",
  "key7": "4dZrFeMoFDN4qQyyF1nWEnxaq4sWCqZoQRDkLkACpXUogcjdp4dyUVsxmRUttfdEtDfhisB6Fu11ZmwtXMx4JEit",
  "key8": "2tZyvsgFJNPMKiHaJ5EkYJgSMkg7P6oQkZc3agzWmf3hjCES5b7d9aZ6q6ciWsGXUWhPCY9oyS2Yoi7zcXqaVWS7",
  "key9": "2fGpUBrpnM494xY5sifUcw16MYfJQRprPBy4A1Kc2YFmP4hZxjLxR7aFw2yVciexBtLAZvKiJtEgeJvgyJWax5Pm",
  "key10": "ru21bMWW4gqQV19tdszkJjTjJEvzEwPzHm463qjz7vFxnLoLM6qsdLtgGjn9PVhLufZjy6Re7jEQpioxBLEM7cK",
  "key11": "3JGvwkzXx8gScyFPGzMDiBknDqVcdCNrrJduRjEDDkKv39aVth7y5Df4WS9cS8xCDA3Md3nFQeh13Wn97iLCF2vb",
  "key12": "2LMkfNMmyebXcWkPCRUrFheBgMRE9wft9X2vJmcofiX7pfbEnzDbfQZHzHPvM31hKjZTfqRYBRfJ6zLUtCX12DDu",
  "key13": "44nRzYXn85oumFawoTkZp9diyVNxh5qT4mrecGrp8csm9tzCBVU24g4uYAFzEFBYjcAchByF1rAYkZEniXs5XL98",
  "key14": "392Loz1si3cD3qVipDeBirLcLn1BfvaBP7sp7pQg1UB8f1Wu95sRituhNbFMrkkauExTH9Yzj8TJWZmTCHjCofEH",
  "key15": "52YfFrx5fNWWJUQh3MGAv5kUmmdvZFBTaG2bmQyG4kigmqcvCXr3ikvMim9WrynRVUkpJs7U2jWn3YSYnsVRBa66",
  "key16": "5d6tVukzX7ob37oAvuZ8MeBXw847dS7Y3vay5cawPQhsvr8bU5PWjqVqVeJzH2FQkf5dC5GToK84EcdPMRdF3Dsi",
  "key17": "21sQbkktaGxmhkk5HKfvcXsoXC4XDVfExjAhkMhZXPduWUhcsxdiqkoR6sCqFXy4tQLrBQkGdRGRLpLkpo4jEnyS",
  "key18": "2THuu5FPYhMeJfr3jCUeNB2z4TjmhKM7xk95qTWwj2FPUoEHRseyn9VzgKx252LsgM78NKciaPYYy4C432ocewd5",
  "key19": "5rYv2BJPaw6HZzVwRbPA2mdaG2fMEH9rFEkvGs5j4H32MfA69yC5r4pwf5ytTzCg5psJzb5v7sEcVkG6LEqwZWyz",
  "key20": "5QZGwSxxWFmoxWwXWRG5HoGy3qmwun9MfSamiKWMTPpoWeEenE2tnnpZt9vcJLrdXhqnqjnGixJSXXAtuUKiNTZZ",
  "key21": "5zWrwNunTEezBZXdxznGKQJu2hiMXFFaortXC24vwYS2jLQRvmbyCUM2pzdGTW3whBn7Pkw9x6FdqWWXMzhiixaK",
  "key22": "32yrEtGTdYijZwSKT59vnzEwJ2uMpq9noX8hZg8oAemWemwehSkMFShaQBz7UZGoZ223qKJ7A7eyCuqU58R4h2bu",
  "key23": "4tBfdCmW7FkSxFvMGTDHxksLQd4bDHP6X7s76ymvuGcbqjr1yGe6J3kCNqAB5ou8RY8cWjNJe1kFXfriybS9JqRJ",
  "key24": "4Ubm7kXsoUwsaSWkF19twfBtsu9vcckrBUi3YsjCyU7ZYNcZeVwrGVGVE5dvwGAAZAyjsCEXLpDbpw1xe2BkcPnR",
  "key25": "3QyCmPnmoQpMigkdHmo2yDjuh2YBPcvdxVxCZxWPEuoL3zRkYUa2hLWzzMvsoyYSrddi45Y1jZwozD8gh9JLEDXW",
  "key26": "62CfCibvuiavbGPMpsjcgNNEBPUHihKnjC9ZoMrx8uwzN4LBqYHwn8FBHBTevifgdk78JtdsNjGMx9LTF91jKQss",
  "key27": "4w5fkg3g7uuxRsVJc8ces869amdgc7nnSPybeTmuw8sVjsmsHwoG5xTxiWoLaUpLhxbjT24RyGpKxkw5bD6AXGEP",
  "key28": "Fp3NCuQpRudUTjafn5Yw251PiK8zSbk8wfmM9WuLdtnLShZ6cVYprXw9QGNQDwKoEecTDFs9wHQKMNjf8vYX7d3",
  "key29": "5ssev43H4HWQyJto2hFvcybyEuEXGMKwGWc8PCuRaDtNw6VQ2Mwo7qjTUFyJP97UoLC5c6AMJ1Pn8MWusHQ7DtWF",
  "key30": "49wrpFt7GaBBSmdfdZS1N45UPcDF3s1YDd7qJtZrX717sMuyEyjAwBWjc2r49e4SmTNtEDPoGA2JgnqxH1RLJDK1",
  "key31": "5iW7CbNxMh1bws94DKhULW2dGS1VzanfRKjuybUKQHydpgySTiDj5jDDMRcpPoCQ9MKNxdwxbQxcxXr4t8ttixJq",
  "key32": "2PLGfrvoTabRZ1asixybZB75LS2MAAQ5xBkQj6FjyHdSxQAtCqpbNNDHMbPaBaAmqE5aATseCbu7JoNF9f2CyeU6"
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
