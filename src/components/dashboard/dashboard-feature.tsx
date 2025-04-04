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
    "22KLkfKNi1Ni7vjp3xa7MNCAjUXAyJhQcjFhFCdEsUYJSqGBADgsoe3Gyvtv6xXeJuU9Na8wR44Lbj4AWyMntDR4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "j8APuNuXZjH52USAmbN7bi9iLYFZajrTArgcUBMdRv4DTyE79jZ19zCHz7Yak9ufV2i7JnRnk9uxzAKn3ohZEst",
  "key1": "3un1TQzcay7i8Ggv5BMV91XXWx235wnf2pAMqd4oUxFQe8NqBmJTo6DkkdD1kGP7ewWwamnh4ZnDm8Jgb9dEQryr",
  "key2": "5zfjmy8BMh9uVMZ2G5PaMzJ7TXrvLHETxycC4Ku6BgBQsWVTpNZVZqpp3nzJfb6VNfSPBqk9nfPUpsZYSsuwDJpC",
  "key3": "5Wb9Ju2v1PBUEi48Ln8CrWtS2NgQTDjUpbBYZEgm6UDwYyFz52G4oMwYK9A5MPBz2Qsx782TszWdq2pkormsehU8",
  "key4": "24GBesPLsBBG7b1HMmxU8XwenpLMBNUFcp7bjejRBYzP7fyCHqQ2AvndXvvu7Cv9uSzyhrZaiLoqxsicDXyDhySB",
  "key5": "2Qtt1ZXwN5QknhCeMx8AHdxuhSLQeNdeycV7xhD5r6N9dBtR9E65f5goNnt3ypLWVsCVS2Y9hN5xpz2zphNo8VP",
  "key6": "3Zrct6UWKCpW1Xwn94Hjtjt2Kj3XNFnEswfmFJAJhiT4Vqd7TtkWZwcsjWveVpH5KApTPuqep3WpsKSc9fcGMkFp",
  "key7": "3PcbbmXVikAh3JuaSssVXu2Xcf2a5V3rsnEzw9CRBGKKZacj81vw44BVsfCNsR1mmy9bYRCDQx1uNjpwcAxQ4tgF",
  "key8": "4DqnX1qk3nqsKPXMVcrajiubiTr56ympgC2nsdQFxHkXvDigq9UdLCB6EWYhGr9zo5vfoKGXZKaszX3vASpm86Cs",
  "key9": "2Km4hNRPEzUDVVvecoHcvWk538koeSexnJVLkokUNw1Q4t8z17HHaweDk68pP6GH8NqVygggLXk7hD6bpzncugvt",
  "key10": "52tNC5TTsVWm8sWFRX6GEjL7HTDGfrF8dZ8QkNmf3EgiKJ7ivruY53iJNJAT9WpUDzswqZKAnpKybdT7tfp4NHGc",
  "key11": "41yawbtH7UjVnkDbavydMTSoe6bC9ajCGggZvhzGLquiGKuTjRrG6XmPPboAvixsYrEv6HqgNKYuk4ESrJb24sBK",
  "key12": "5eJTGGrTwu4dHXtz12mEpn9phWpH8nWCvPW5TbZf4E6TCGy92dJsqFegSJ413MxhLDwCJH8v6SG6a166XWbcnHTU",
  "key13": "4PErWgdzUktPMrPrhenh2dS5C4iZot9JiX9BMRquGgeaohy5sPVoLPjBVF2k4dptzphqoEpce1a6Apuwv56XwdHV",
  "key14": "62D76LXveHZ8fBgwrQTyCed1je5W2Sf6rrrKZUAZqtXA9gV79yMVdVZhorduRubyXqkk3kQCRK8Do2L4PARf2tcb",
  "key15": "Tc47MtrNfcrdMBcnDQwNPNDskBrhe2YkKeNZtV6d5gdULLZRedMKR5DqLJ1VK2ddeHPrC4XE5HuY1vLnCdtbp73",
  "key16": "2DXzLb5HksoHwxJoP4Ds7JQ1XzFhvevTt7nv1oBroqkiUuULv9RDpyJeeudiACkjW7MuGtNNN8nJehKG2aH4cTpg",
  "key17": "3K1fYsRubE29x5dVZ4JM9nr8rmpgJvMHCZd4PiTRZqymiibgSbr64KiqCXZdEJYp3Jk8f47RQkMV5DLxUjRAvYbp",
  "key18": "3rUSVpSqg8NtaKRbkoExciiLrz7hpHSRyvtWysQDbGHVmcQUB8M7Z4U67AMLTowX2JRmj4S6C8tFC24AJ3GfQiBt",
  "key19": "2b3PnSFYdqf9zbzMPv8dLobNNGiXb8SEBLtRNFNeWSoR6EpaiG6cUQtvofmtRkUoZvSkbdEkk9C28f31kKFnaJKT",
  "key20": "wXZMRbUgTvrGSCGADz29Y69yJhgbTZL1uNjEyFaTVDA2TZAcyExwnjjrV1TxjemEaU5vsgNUbWjBxrXRnt7gHJZ",
  "key21": "3TXmFsnSKEZyBUfqSQWSp45g7ekw27ufP1ahJXXhuUXQ1w61etx3956V8gA3yNoqucJGfa8XsYmcYkgx5zUz2NN1",
  "key22": "3hvpYaxPm4aKE3qZx7iWdq1oZibSd8pRdTYdpbjWxNgdxgk1TGRC2QgYAGxkQqdQfoWeHSVHHCyp1cPo9JomEwtm",
  "key23": "2Y6EN3C646ZZxE27FrNX3KR4MrVZJWBcdxVtf92bqvFpaKMdfzXdHAPH6TZRzLnhJxRRVWesCQ1QRcwSyxriRSdv",
  "key24": "fcLWVvYe6L87QB12nPEejLBdNL6hvthMJaRZ72pZRenP4KP4FMNAbiH9yrQKDsS5qJkSoeVrAwARftDaaxV9n9S",
  "key25": "DJZ7195SnXZTEr42deNrpTXfW3BfLTEZmmuRKPGMfeoePXYnYZJMSwcZBtv3LasvrRqaMYk31E5XENQycFYGB2K",
  "key26": "3QKqS1heTdomTUxnFhfaVzcoKiELcjJPMzTjdG82cghabVWR7Z4sJL1aT3yPMLePRvZzUir9BopkGFELG2HXfoT5",
  "key27": "3FCJDTrBDwBaM3omkPuQiFpkdbSFiXoa7FWfUAr65MU15UaG6Z7aKxfVY6yUVEccUNag9AqJY99FmpRhTKzc6ZpN",
  "key28": "5FpbBA9huSDnUyBP4DFoNJqN17WRo5LLzxtGMakWwauZaSPiZC1MUDvCrn7Ri69wRJsfPZHZUTEzDsrzij1qazq",
  "key29": "5BYg54YYCTWqe7x5QsjyuqgwSUpKojJhbkscXHUitke1rLvRzkwPMAVB4iFPZ93ejPkQU76NiK5uMQBorqYJ3SEp",
  "key30": "2ym7vtVAYggHWxtkxiXsYS9nPyubwsvVa63z7ppyH2NFUWTrC8MUPyB1zSpc7CprkCRJjB65oyYzoJ7tH1yqtQgN",
  "key31": "2na5qUkyC7ZpP2ATCRtQSQ14kTznpd3WLV6GFuBYXMmbzwN5QQaRhDka564sYpqE5EZCcvBFmQ6i9Z4isGuxHZSK",
  "key32": "2KMvMYW8Abe5HKmUF8KEpekP4TCYSEoB2uT5qpfKXPYQ9hjLvEBvRDP3GQR4zD5JRDWZgtBostuhwGJCKQpWDn6c"
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
