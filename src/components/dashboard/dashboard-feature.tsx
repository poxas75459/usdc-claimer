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
    "2S6LRg1vyzpKu5f9pVcoAyMQU7ofVaw3KuG6xaXqcduHNW5XCSE2YdtAStSk62wddtVh6GNcqcNSH871JXV2WzqU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GkzE2TaQ3CXqiunQWp4H2DpQHVsz3Gowk5hMDu5t8rLSzgb83RHGhXcCgmKXA7U11yBSHWikvHu4LVm9Uw1cUrM",
  "key1": "3fsDn8oqWADUrLhxWBx2YmxR81Soe5rx6r4uDjfuBbWYpwncuSmiPCBUTyT9jmMvzB7X4zDxs7Ehs91h93yh6XoT",
  "key2": "sGDMhj8RiYGSGAyATbannT21kkyUuhzYkxFDhEj4Ho64wsDUFmoJjzedhgaWnJA8BR8tBnZM8t4bs4TWMY7cXuo",
  "key3": "2ooawghY38dDfgie4BAB5uLHHFMbaeTowPcp3DzV5mj2WSiTLiSYikPgygG71vneTZoyqnasS2G2JqLLkNev3MhZ",
  "key4": "5QJMNmHLrEcVnYWxGLXZ8q2rPJxuZmQvkbHNPQVceyTW9Sjdj7cBGEDFC3sBXuJce2gXWW6M8mpxXcCxZRFCbsoV",
  "key5": "nMuNzuG8YQZBdpxB9iAcpq7ETQ9DVKHh33qbsg3tXx3Nvb7Ee5K46TcAMAmRAWvwgQp72FRC429aLKQ7ttNCrhX",
  "key6": "5JVMbZmg14z3Knj6X5ZL4kfa8nHcZwpaRVJW4w9JgHztAdga57wbXfjQr35Xxuo9JurKZkGesuJtQRgq8znowZLc",
  "key7": "5YnQJZrxeYz94Ki1xSiXXHGRVcXz4HizJjCdpXSLY3PTtVrAbXksPT7YsmccaksCdEn78ThAkNPbRt89csJDKJ9c",
  "key8": "2TAjcmpGYFdkvb8eaWLjejNmnhsXw988idugV8srkQZ8JdxXeRvF9HF67RS7B24Cbq7WNFaFFXRXCWs5iV6JEFJw",
  "key9": "37Y3Qf1orN9cF2gaNPNbaokzDHh3FCfCJkodoGNoKpXtmjaarwnbD5MfQRgXgDnaGrD3xei3MxM5VR3VfnMSVxr9",
  "key10": "53zjiZG7AQrBHkX7CqxompPK3LZqmbDbmAq2JhoajXgewcUPpoXrZZspvDW1eCWyXiaExhNwQX82CjEpSJXqsrVe",
  "key11": "2HDhFLx57zEtnc998rL5ZB919mnu2GCovjixUKj4HnUHTVyKVBCvF7Ri4hXMGb4M9MMn6ruRP79ZSbEAutoyGRKS",
  "key12": "3a6XjvyLXddxYMKEe6jZACAwkX6BRNGgAmyQhoP9QC9JiejjtHyaE2jdTPZUdAuYC6yd2HuniyHnizzfATMaCH5x",
  "key13": "2RdeLgQqQmvUUQkBiJXtQGgtr4bEFUsLKC3xpZ6CH3jyk6eUFCRaZCymgvk87vDLJLjANtrYapRiEkhUKJymYm7m",
  "key14": "22jGoDCgGdZ7mdVx1Jj6gg6nwLKrg1P1pKMN44gz6LZRXrsUks6BTeVBhbKsNVTAbBurJJGSDBixcYpe3yMBAu2g",
  "key15": "2huZWChnSicBt8AiBEWTtFGTHgFWNfSuw1hwHZ4zotqb4AuT7X7ZqwhHxmfF4o8VbfwuRMVWZM68p3NysfRTavFU",
  "key16": "6v9jYDqW66hM8Lf6na6dfYqtEpUKtfDamFbAo9YMnNUcetcMfXdFrzrDErni3i7LetfCmxEN1UAhn89iQ93M27Q",
  "key17": "ji26PiRSs4NGJwuMuT5fjwhJmvCKKRfaGzRpvzs8zojkseTSWFhNtMHfGXaoXq2gG9bSyz5LSobcr8TUsBa6vLp",
  "key18": "5pt2yeMjCatMDzi7QpCipCXFSime75MRdKq5bXhWW1Ke9BLnZD292uA2M11WbrVgv2LQ4F55FUu8DU9SnaJH8XM6",
  "key19": "FByYvXxEhwkNo4FeiMLuK5LM7agqN9azEFLd4fCneS73hmaRwmi6mUUfPbfMXeiNNURwfj3syLbW1eZswf3oFoE",
  "key20": "3m4DGZ5zkafoNCKMWNdJGDp2Q2ecdjKR42CBhnYSWbBktwVQLvcuVshaRjABAiML4sh85pkgEL5eu5kMWnNgeb5h",
  "key21": "25h98BREsFdpissjihr58KdQwd84azTSzmY4rqsPZLxZVsshzLYDcE9um23eAmEhBnJJ1eLHCgxjzsUBcRjgAwey",
  "key22": "3EoXqaV4qD6gmyQYdyt4TKLrXFf4DpuDj6sdcVNoe2hxckBDEsjLB5dFjjqRuPDAhdHNGXc1kKogEEgByJ4evmyL",
  "key23": "temM8mkZ6VhUFrcVoq6kjZwHegtDx9epNvRGNME21q1EPBM2AkE8jwryWt1STtPNmDRNtroUpwtuQqHh827fjnr",
  "key24": "Mv2W3B31RMGq1ip2Ri8WiwEf9fsiPZy6uaryMc6ujKG1i1KdYa3hdwctj5x5jxDiJW1tdw4DbRm5vk9jvPbD6QQ",
  "key25": "2bB33tRJQpTHnESKcU3r28AC3cztMnZz9yd8y7xBN7pauCARJtF2WimLwV6Dqm1huNK64Wci8MZKgAiPESoErzHA",
  "key26": "4yNDWrkzC9SQFfEwxhy3QTMoHzxd5FGQvhTQZ3xaQed1xLTwifuRZFSmoTxhrZYrunbpR5GaiRhUccMgyt6nP16b",
  "key27": "64nw9c8t7sueAXeFpy4DVNaq7FonZt8MrEA7GHb37Y4xntZrDNi8w1wxoNSdvVEP4uEG5tb6Fhk6Vsu4m8LgJ665",
  "key28": "8afJj1f8o36JpSmJsXw2S5Tc1LQcUnAYJGb7VpR1TcUwMdK9REny1BLhULVrPcisE4n4KoXDViT2dVfJjgtEDSo",
  "key29": "4cyqogLu8VHrGp9Zi8jhGz7bRLu6MV56MEK9tnjAxJyvKSZqLNxvSJLoVD5UmXXH5Gb89SWRagq6XeJhTjCZ2xdW",
  "key30": "2yUAJpd39kmxfiLxVnj9vNCFeVCNP424Y935qPXkKovxH5L9nBEejexKxwYC66LmY6KuYu7CkTvX18BbVmgKsudb",
  "key31": "AX8CMZMJtZrjZg918F8fWttz8Hx4XFRv3CPgddRGJvm35JdpXJxVkWsErbcLoEDRvUV57v5BxFbRHtZqBfDVqHS"
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
