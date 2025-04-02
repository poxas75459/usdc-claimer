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
    "2LoyHZ5sogcTgUY1uxaaDJv6YMJGqXCPtkgWiR8hPQSKDL6vm91mjAYXkQjXx1MbozjvH6b5Zbt3V9NQ98yTrcLc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NPWYkZyiLrDiRxUXt78v9iognnqtnbs3M1enZY4kct7a51eMj3nRS9ZJuJhdMALW1x6BaYwgWMEh3vjj4VrjLKq",
  "key1": "4LBbAwi7zebeyfWreooAXJ12izfqUXbhBaytYmxe5fyqdzWfJgxSmXrVki3ks527LjNKUAy1WvGWLqFsTUh714Ex",
  "key2": "2R83M2APGqFNXdyjZrQTtZSTx3XVeAijEgYLPy94kmRmrQCMtsx5jKQm9N2Usw9Xw5238d3AjaVujCsZ7xBoXqsL",
  "key3": "XybtEL8TswnbbmPV5EUrmmbm4z4phQy79gbEuUCvUZ6nHVtHUWNePGC5hTZFgmUtaeCPFCc7NWixwjb99KGmpjE",
  "key4": "3jxWRDpEiVKH8dxDNosVB3XEbAvsY3EFxvCnKQ75Pp389aDwxPYY43GKN6GyNWSXcVRU5bcYd49dDkJiKAoMPLRD",
  "key5": "3WmHZryYeRDK5r3bkjvwTEWHn2cpoukHJnifvxKpVtRxMgR2TWTf22k1sDgzUE7UjZMBjMAXtSbRvwjDGFobVZbJ",
  "key6": "4vm3xE3wo8Bh7g3BKXU1n4ArePrPZBTSLgA8yEho6jcFtUqZxxPGW7ZwA1uuGBwRYxuEJ7H7i7JXu7Xdmr2nMu95",
  "key7": "22R8Nnf5inXmVSX66TkSgJMWQRhdmjQGfCEpHWMBjZKTPrQxv5yWvgNQdvTyw41Rpupcham8HJtiqSNmfPwW1Ypk",
  "key8": "67SQPfKrjdcZUsRm4Fid2NLUrrTJrPkvSJtXKZ4m5NNLCiU7CoFyGndrNy6qk1FEN7VDaFMRfZXfra9vzZLB8oQR",
  "key9": "2jfbeHoq72Pm2d4xK6ErBZnJGHwUCMCV9jueBrx2ho1xy3dnSb4kJ54sWhTUJyfnLiaDEZxAKsKE2MjhfcVZwYud",
  "key10": "2SLJivGn41qcZH1VnZUo1BuZSpCwaPr5BMtTzjz3ta5gWjh4wxsGbUHfNJu2TXLPNWFAMQksHr7Az1n23ptmcVgD",
  "key11": "41ztgQSGNtmSvvCoJjCaKLedg9H3VLJi71LjcAAhSjf8w9E6Zzpj3h4L8mQ2xcvoZUmHjH3JkNDA7FjTLy52Nw3A",
  "key12": "62iELStSbQ7w2rbawNgoPtMziZs2NspQTHvFYQhS3o1jm612YSt2A4bZh5vAHrnt9TXMtgceDGDd8c4SGNPkHBmw",
  "key13": "3TFejKcZAgTBy8SvnBgj5KTHLo2ZKLU8VEHNGr6RaA8THNW7V9BB8RkAH98DTs9gUjHkPEDQyn3krxDgkXyDwwhm",
  "key14": "KMZBHXKAL9TY3ciCuqzoi4XUFRr52e7hybB37rJmxFiU8r9JRp9NFDDPmv1WdtZCLz1fvZbSu9JnavCvKT4oFPG",
  "key15": "2dvQKsRpabJUZjqshnqPAHCuRWXYcns3KZr8wAbr57NcYHpv7tj7oYVowVMDYMzPgYSGGjhqau9iVk8RhZdMCjnB",
  "key16": "4Yn16NmVTDESWUNUN6DYBWNQKh1kAagPpC3Az5hRZiqFRjtu1SjeSgZTMno9vzXmcG5JihWfv2F2d8MUsrN6MDLo",
  "key17": "4DnrnHSpXQJDfs3bnSeDJMYRncqgQwmaCrg9JHKbh1J3akQxVBworJz2C5B25JrtRbXMStqickErbKaJ7zd528gT",
  "key18": "4q1Se3URtPrV4MVQoT83rabzuEVr1xHRp6sGwoPUUbSocpMGcmN3HL8h6oJorrFb5vRfWAf8eHhpUANLnb2AYoFj",
  "key19": "4VEegmpXmqbPKVZpLC58GGEtbhBpKta9MaUxR4ERcpnf1MYVkVMFFmLgbsrcRzoS6mMjJ2Ben6pVSMQM31jesTUH",
  "key20": "f4X6frZ4TQfEBzNEpcQ9zJNq1wZy7fwQ7BvBzMvPhn2NbuqHJibyrN3VZfddsYc8wmesrUXSgdCtPyiARpLFGM9",
  "key21": "5JK9wL4wqmpHg9BV7pJM7Pyt3NT4kBxWA89LbMvJTozo3BW6QfG58kNqRppUWWGfRQkCARJiP9mQv3sM2AenKfYy",
  "key22": "4Pu8EiEv6ZBswkmK7e1BMk3mYnTVQiZoJVnxPfGYMW7NwyhEYvfSQhtKJMQhMMCXt6jt1XwVCX5gq3XT9JcJtM7u",
  "key23": "5QBK3CGF6gGJocC93jVxJoRG6uf4AFHF8QG9bmGBHpYHDdhb4hnoozwp1BqZf9PShosuFEuuGZA1ygF6L5Z2jzt9",
  "key24": "3eytWDaRwXNpbzAkdGmJZaToCPefrrHvMLoEQVYeR8EKin5GWCcdS6HayhZAdMq2vH1YPF1wyRj5pdZUVVoGFSuo",
  "key25": "2MeTiuGZEGgfzSUnk8Z4rvGYppXqUfh1AkYss3P6TVbGnKiT1s2Tdax3uGVW77J8wboMk3UknVHedXCJeXbSEQ9H",
  "key26": "25X95uUEgEu1Xcs1gHFKYyPjUVWtPYs6S2doc9wZsUWGq8YjgkNCpgGRda1nbzEN8SLfNBeekiy5ivzUtHyWnGA4",
  "key27": "qC79sXHniWfBYSzuaJiwW2BH25ohj9cGMgRYovKj7e6c17FDF7AghQxdkUz8317vSGwy6fawbQte8ZoD4VxScFC",
  "key28": "66QQX4MPJMma59tb74ShTB5iySKcxZHDWHkVc7msw4FbS1WzKtpDBTgYQcmb1WXuqEBBXnL8F5ixUj7cQQbaRT31",
  "key29": "5X6bSbj12TvYhADjaAVfJJZysZzw5sTkFrBdFHCq6H6uDMStUcbRKDtJVfcovUAbX2MLjR9av61hPCCUhDcXVdQ2",
  "key30": "22ZFwUDrF2eTf5HhUBP3uMuYo198yqSkG9RDDp6KXjdW7o3xN6NjoxipmsnbjkCzueLiJN7qup7dQzNM7jHhsVBT",
  "key31": "541d7cT2cRTttvq6fhGmjErXVusrmrvYHCVz3cZ4aQdFsFEgY6aLvdrVs5rrXvZFFhYoAbb285iAH9dL9u7pJ3NQ",
  "key32": "3iRk7L1C5atzxabo58rzNv8KZVoTjsekfmQCwRWTFmEDnYV76mRLDvVS34PKLfJBkpXmTCbGo8ezEL4zqnYLBac8",
  "key33": "43v6vNMaKFQqLMcfHUcbExQVYaXBKsV1GYKf16wZanYdnf1Tx5aSh14nJNrV4o3c2cPudPk8cVeeX5SvLmBAQqAh",
  "key34": "2J26KgVN2whczsAtkRjpTc4RtCH7eYXXaiq44e5wij3MEDkNPDbnSKfTUwbhHcGae93KQwySRfxTGhjn6NpF7xuL",
  "key35": "3LEGBjnvxfws9UrzkGV2CxG41g2JW4dpihzhcxYQphhsTweWCkh4Tw5mCQMZaQt2zYsYbN5YLYQxXPMzEDSuU2hD",
  "key36": "2exZy338hM9EwhdGtXokZQjPDmhAVGECDsP7niYA9feHY5QqyT7yKcduBq7smwF1PCEVkYNKLsyDx3DXfhYNrDb5",
  "key37": "5jQcEi39vFu893kYpgjoG2CPxemViB9K71qAYJHYxzcAcNmfqPPkACoh2wT9RFHPacnSnPQHnN3kWJ1oe8YbMsoJ"
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
