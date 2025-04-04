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
    "2R2snJUyA1bu7KWbLUnfwL72aw749tfqnJwC5bQGNxskQcP51ZPxUb6ZWTCD6TuxBXE3cyUmJL7FwyQAJMqRmHnS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nsX6evqtGnbfi3jtNs3b9fDdnG9GZR85MFu91sBvhapMmMUUq2p5Hcx6uXU9rdB9mRY9kgNPCU7JaDcDdWH2ZGh",
  "key1": "4pqX1bvJ2UkDgdhmhREHMkuu71SW9fyNRwAiz3Jsf9cVskYd2DXVSKHXRrGc31HXp5rs1gJjzdF4pAY5S41WFyss",
  "key2": "A77tMHh2uazHth9TCeoyTWEGVu29yX9wSzpFzcUjWFccrGU7NgAgCekGJBFobbBkRi3vEt4TinHccvUkuRSv7Gm",
  "key3": "4n9vvhMv3uTxhSftTcQs3HdZ2G5t54JUpAeXSkBs1eorafjaVPJWRnwtx9LJ47k4ZpV3b8uDbGotvoWADjNjL184",
  "key4": "32Sp6DfgZHkgGr5VRHeYbf3CR8hktFZZhRdFiFw8qNrGF2j6EaM8Gkv88e3Xx7jtvR32BeCLdqHxHCass5TGXMQf",
  "key5": "2ypLGdy1jhrNX6E4Rzr3X2Knu99M7Sbxumu8TihpnZUwNdHvr4bEH6RUGPRwpugfgPNkGTihY7ba6aAws6aeEM4R",
  "key6": "42vXNV7T8qZn89uSdRR56ihBZ5WQnTygwaXk6pdLjbw74RMtYrgxj8HHbBzhACc6gAFkLWPBmepMSb7h56vtB59X",
  "key7": "62xNxezdL9DkDjzfCawF6wwnNzWv8p4r47RznziF6r6jfWUcSRMcZPaR21rBAKK66ggobEJAusGrqtsb1miGU2UJ",
  "key8": "4CD2XLGMSS6nAXxTPQysJBcV62SV7iAemiQEwM5hd1DkarAKFjGUBu2R3krjUU97KA4jbpWbXzknbEzgVhSVEeV1",
  "key9": "4TGxw323FSgjr4T63qUALg97uDPpEEx8p24N2ozvMhrBm6VvqCDURZP3UJRFx74ZhnCaVz444hskjakVQ8f11R7k",
  "key10": "35WS4PvU7wo8QPDAeDE7RfqdoKSo3MWqGDTQiqVp8y4VZQ8677S2QaYvWVJmcsjuuQg7Qv3NZbAXJYfDscpTs81h",
  "key11": "5u3Cxo7ZCceyxUJBc9XocCuGqALPyYWQVDRfctuCDXEneCu3QPpQQ4Asxt1efShhhtzZMtujpFxPtyAnxKvSwBRQ",
  "key12": "4QjHNBYFnWDKkrBgqUBgMkf32BG1YvXXapD427BX6JFeNcQ8oZ32VMLDmBCUiiYkqn2eif97VUqMtGDqY6WMNCEH",
  "key13": "2uwhSYo25Wekf8h4LSGNskHFX1eDKkgiRCctG75tDidpPbQ2FDXKKHFmCfjyCVK8JVUemaCACFWj57mDJW78Jha2",
  "key14": "4M4vQ6p7MvoYYy9EGaGdiDQ7dTuPmP5fkdGEYDMeidhy2NqRRBWgnbScKD1vAsBwXEsdiQYN12hFcHCPL7fooyeV",
  "key15": "i1Y4ju8Z2puQat1gpq8z84bwAHt7kLbnLRhq5skkuxV9D7UgosbxYMEEYTCQ7nKbmh5vsb6LpuUvjLN46xZFf1Y",
  "key16": "42eLMjLvYoXoaMWw825LZWyJNgXqFwVS2SXhvHqoWbSQzP2FrLsdfTdVT1fTd7hhoHcWt8arHPh77Ss9AiNGMWEf",
  "key17": "3ydehWAiJKH8kt7vtHshdTwvyg6CApTxYD6XTiSgMSmj3ZiksZuX7VeVEHYqHgcN2TMgEefKM1ueXMqPeygLDSLp",
  "key18": "21rXVNPjbVdsufdAKvtKm4g1x45Gz5Hk49qt8BotTyoxoRoRYAELjAC7ZgQoCo5RxdYbmgi6wh54DaurVXHSy56X",
  "key19": "JvrNwzpbV8ctHSvmVPb7pWZFGDsxbWEeg3uERV8vstfC8dYbd8bXpzdRhQHrKWuPasdf5kQKeZo8svC3qT14hKS",
  "key20": "MPUmMZjDeRXzDbfVxDFkhdVPqfga5vVdy5fzpHANZ3ukVmkqzbCJ57bnVCiCbttrfZsEa2Vd2jxneHqf5Sg6fq5",
  "key21": "2Fd1fDtZJdsdnft8TKLek2xfGEF9uq2FPxrPaZDujHmLyjN8wVa9KE9SrRfZQYqWHPoGCLqL9WSvwp3c198q1MdA",
  "key22": "2jcws1dT3ioKzcCp7BARaWuu9gfdDCvvac6CFYWLnxUMBezPwTno24HuWF8ZGXw2jNLH7yGshNLtktMZWWeVtfzg",
  "key23": "5tjmEBDnDGXnGwgS19QmwBRPQA7kH1q2ptFRgS9bvyxe8r7Pqkh93Abt1ruzCHFZduut2rM9W8Yzd888Ld4R9J2h",
  "key24": "65iPk1p1t3ZoRxjSBAtvAyQAELK5MnuRKxEARJdpuZfD63inTsXHs8t4AuJ8LQ8VGJcseDnkpw4EK8nm4AeWnhse",
  "key25": "UxPmfRyeRUUJSQFmRtMr4Hynstdk4aG26cDmaRosSvkPbMhQTeDxNXrXvVLs4aLgQgXZrWMeU1fZ7DGHyWkd9bP",
  "key26": "2cMY126vJyzu2WLC8HCVT7jutjPmGyFB4W6YXHrnM2xCFFe7kCEHHGbvii8FAcWh5wkDjJu2qu4UzH4gHTPiAKw",
  "key27": "dVm2a69h129LYHqUSXgBWcuaynMW9Df86VoxuNmnJieKzvqieWm3XvdC1MhAC28JnaMKKZC9Pnb1gFAspPd1eQN",
  "key28": "2EVRTGcSNpkRsjNUwwip1et5nt8tfkP9GvS77FdQBuqygC6LDaSWoxeFjdhfdvasU6gLqnLn13yfcCxCehv2j1f4",
  "key29": "2WUuM6g3nzbtqEhFsxhrfxVuqAjMGQ8ZhWxLBJkDAM8522aknJVwbjUipds6V3SsVHH7geQXLnFBPrZ2xPr2CdRw",
  "key30": "DCYzxJ8zjLoiRFNVZCXiHgKTRmTHXaHm4zXM3J8sWnYLP58QMtgS66YBxVpq4KujSuUab4XjSdDguyVMgphkkQ6",
  "key31": "1dqtQRnQTpwp9xne9ubQMi23vAoRVDdqWVB8UX63AzWWokuMkxhfLp4A8ExehhFa3WHmQZfujgMwzMtZxx5CFzZ",
  "key32": "42MYmK7i9oUyQDKBneUbz8wXRNV9ke4sWPjLQkH893XEcJgrRocHJMNeMofwA2ysF9YUw6zG8k3PYXFTzWgA1H5a"
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
