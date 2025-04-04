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
    "NvNvQoiUAz3xxgwkNQmNbpMiSguHCx768JsJrfgneZJSoMhAeqcKFXrq3orbHAAfF6yURc9Qa2k3PPryK1qmkxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZjzmFKmkPYyFbs5zHPrCwfYA3uUBmx2khQTPU4xttvtx13vuZ6CHfrqDGkkpj27vJ7yT1ojF6env9DW7ncxUo5e",
  "key1": "3ory9JQN3Fj3yXwAkTRrN63HetP2BBpNCdPY1DFhjxb7ZNY5Aa6gW6Y3bxG12MY2sdxfj36FgE3hL4Gdzqzwjivm",
  "key2": "2mEH6pxVpDckXxZZZimYyqedCWLt13mfryYgNdJem5Xc35JhBsDTEcwaUGZVtmpxmufPJE4VmAJBaYmGkGkEEf2E",
  "key3": "39UZ4r4mXtf4nwEx2BsHZvyFEg8Jd6U9AZ7dJjDcpb5VgzpTcipnCmiG4a6jyDR4vPDU8GxSKKnaPrqRvhQPCjTp",
  "key4": "3KFS85bSTMo8cN7C88T9xoK1jJFf68iGPi7eiLW8f9dYsDXWVKaDRYArwz9gi4nQhCfGUBnWfNvCAbau2xXfpQwq",
  "key5": "2wqh8pRHJNjoSGKzZmC8rR5MuF9Nn5UCRUNqjLLDoevM8exGS8G8p4JArevuPmwNgcXLF4nav2WMWq91gDwNaA1X",
  "key6": "Ta8MpW4MsuvAYLHuxbsuRP4HAseu2S5WN8bBXVhG7i3viGfdphEW8y19JZr6j1u5CKs3CxLpV1wbvAjT55AcTZN",
  "key7": "2Z5FHz5m1XbdXPcTrfWY8UP93utypxpaLTf9nGY9n6qAKoAM1pTXhNqWMTSnLhbBWoasbqvBQmYW8aSGxZbexLMq",
  "key8": "3TNFCdX4idYMb24LHbcixKbuGTWkpwR3aaEnz6HXGKpMF7BjwZgbJpf4ujGM5V72e4b3yBSvKQr3mJKE42BBxb5y",
  "key9": "3SSHghEqZaScQ3GtoheMS8fiHwNWHp9NKYSu1V8rWZ3UdRc89qTBxLSYEuDJv79WYa9ppc9UwooLiecZeB9Eb9fE",
  "key10": "5zcSphccj6h11NjRK2hXSJPExWyaHTczF5hkBUXo1A7Hk2uH9BYV58VVE3PizeLJdbRFKrCCcYngtQmXBFnoviK1",
  "key11": "fW4Rfo73t1ACqfBa1X3ubwsFhvJKuJDjspYCCLvhR5BxcXkXW1jTthncjwskjuJMzpHF9Wem9hevCnJMdScx4s3",
  "key12": "YYDZrajiTnoPnxQGqStcdGHRisC32A8RHjSWs1mgrNLL1ixycaoY76aLkH6t1rtBxygvYkgR6qe4YxrhSiDmYgE",
  "key13": "4fHm1a7HVY2H8FXM6QNWCqbEzPQfofyNrUZrpjZCDByvCxnyp3bjLz4gnkP7ambLjrcAMGugx3m1dNPiMcF1D3Go",
  "key14": "63vHF6xoFAnkyU5xc1SwbmvdPeCN7CPf1SXARDCVBbzY4EJJJcBY28pkG1ZGFvVyVTqAFvnBbsALG3Cr8DJhWBUQ",
  "key15": "22NtECMfihu7pcjxvu2LNnbcvhDANkK9eAAwjATNLJtWeNYzdv19wq3nAJ5tqai4gtpMUcfWUbCDEBMTqaspXK38",
  "key16": "pvuetQej1LBWPftPWFZwBssco1WkGdn5vbtW24qxUoJKDX9J1c8NkRpWDnydBE3L3L9FwGytnJ9VyoVFRr2DL7i",
  "key17": "2x42f4cokwxC7mKHMD2d96GNduKCNYhHZaJ2jxP8ctUN7vH5gyQXnzGzpXbK8GVvMkqHeZqCVth5iN7RKY2NvfWq",
  "key18": "3cVLJs3xjrXh3pzpUpjwHoP3rHMJpzdeyWw7RDXg4j8JdGditVg3w977M9JKBtGhdXtC2A3MncVSxuZphLCN6v94",
  "key19": "d6vKKvyM2EghYpRJnX6wfW7tXz1RQed9DtSHG8bxhcmbBSX2g6cxsEvQ3pjQKskTzXyPZzQcGt8ECaKmraBRRXY",
  "key20": "4pAB5tWoDGdc8z5iP3g1bpRked6rS7Z48HW89wRU8XwcbUVJfr3PL1e6cyBifqkXjtMML46dZb9Nhkube5vmJZmC",
  "key21": "4RbdNLbMqXha5JJHT3zkf6hDgzYNBELf1mM3SpU8TvHVG9eVngTCzkUus6cqTdBr3HCjQ2DUYihWW8Tr4nuhAV7z",
  "key22": "3f5KU496q8dX4wg7VKaYYYxtYcz65o1twwKhgdfN1jgS7aznYWQqKZisa7WpfcJ8f28xvLQ1VjDkAzhnqSQqJgMU",
  "key23": "Uy8D8imLhtyqndQCpKMMMfTGt9qRShLWENj8QiUtwjgktx1HHfQTV9zMsmu51vnLuVGMbd9SYsetqXziKH2eVEb",
  "key24": "59nMAWH6gYEVtWY3xxGGJoKfp7hiMxF82eZwYp2L3u2vL9qm7a2G3VzSzRDRteFepHBJxFLv9Yr1zxKC33DtmSGv",
  "key25": "5d8e4jv9nrxJYLhd65ivBb3N3iMSE415mJjx41jcSfVDkwR2Y3RshxhbAVDGEqf93Wa5DKoqNL5ygWawzMqYS2Nq",
  "key26": "5RM2gbVMM2FCC73ckr8HVEZVavJXMSFe4tnsnNyY6NMHwvciXFYX9KF9YARKiDri5uGMCwDiR664JbQfN8Gk81e2",
  "key27": "4gCHa3E4UUZFy9pqQ59ApxXLYMKhpR9QKPwF9Nc8nLEfRE2E4Ntw3BXz6m4bqX1vptJ2vrKXGTzH7EstthHKsqd4",
  "key28": "4CHGncZuiM6J5ntLG9Rd7qKkZ7PEYYodmq6LPwE2EY4NWt1TAh4QZXpaGSPES53M7XwZjnRZkz9KAhdqEr9CSnG7",
  "key29": "5YUyp6PPJu7kPhJCP4XqmbA3RLTaWoXs4zHpitHQHEvB3w13Kwc5fKyq2meEGQHemNPMRqTGL9GwLWvv5GSZNzSG",
  "key30": "4kdJNz9PZaGkLqAooMQJzKZPSEMZYjhcrAZWRryjTDiTBSx7bSmfrNzNfyjAj39Dok9iBE95CYJdETZk5PP7tB4p",
  "key31": "wViGcNag82br49mBGRFgSNE6dPxUXG9Fh4vtbJ7LSCoV9QSP8F5gzQ2WykEXeWGGm5u2ExM9xLGD9mUwr9pkZWM",
  "key32": "4TTNtuLFoCYALRfuhSzjyiczDPgbGyhEFrKCn6drodoEFVPwnk46XSBF8TfuJWPdQXpcKiFTtmBoQoaMs1n2kPwf",
  "key33": "3Fc4iuaLT5QztpMrQPwqEjiRawXY3Hi123V5UhpVfedLE184qUHtuPkvWDtMkPG8dxh5MvdLBg7TWUmQTSK5YzfT",
  "key34": "2H6NavCiakfq1AZPf8p1hgN2SKNpN9HP5AEisHVLGQDkUGwYEgSZojQZqw2MwGnwLSfXUsXQwPPxjMPwfCCUy1wA"
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
