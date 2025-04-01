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
    "fuvupYZBtTAfiJD7jp3iL1tHb25v1tN1xCCTvrAQwM29zxHW7mNDFcpcTzBMTtrwEqdoD4ADqJ7oRznchq7ygfk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dTdM5yCUYuQ1zARAWjpE9C1mgRctDJiPcF9pMPAycaKJjubsR99yjtRXds1jMpZrkxgzfWyzDL9iPnYooutUhaB",
  "key1": "2FqggZH5dq5gRWtnrkz1xx5vFmFcFCkjw9FDiWpbn6Tx3pQPtvf9dkgngGWY4b3hBGyaTEbLK2Wi7m61W5mGF5oD",
  "key2": "5J6nSsnsZYzmMvQ4kbttoSiEMEpQSGU5rqKucont152PkkxRwedLSGXGqdHqHGMHriSpY5RUaBky2x7B7Sx2zxC8",
  "key3": "um4etfxk5Aq1R3N1UfCeNRYbFcDbvY4BtPbLtNWi48HC72ouMPpYKC57VGPPFA1VHKM49ThcpiGf8MyDQniEWtB",
  "key4": "4vCjZcm24jZk6mBMYeit4v7VECJYcJWnBaBX1rsCEDAPqmve6AQsvG6Txh7spwRMxMrRmwgspv5UUhsuHmDyEdB4",
  "key5": "3ra2en5idEYwPFLoWx4si8anoa8jJEjQppJE6evRBnTaJDEM2cmytEkmzhG9m8uhvyWizRbtdfbn9BywKXcsoCCt",
  "key6": "3283xg1AB5rajtoHHfRpxJs3sz6BhMy3Q93pUYRpJSMJ6mC5Anmd5q5diK4Liht5hS2uEiLxLTFQ6NBgbcM3vtGr",
  "key7": "5TKYsUYmYbrV8zWjKuzfz7XpVRN86htDrqqcCP148mzYR84HbhgXuQxRC3uXvEQvr5mhA3uB5jidoj4kAJmcNhqP",
  "key8": "4zYUmFebH81aXZpUPardfMoe5Fd5tQLCB2KfiTV1fnHgvZXPw9aR8p5X4HWecQnhUgZ7GvtU7vonWPWTHfjuvHeB",
  "key9": "2TJhrYvMAZTo1a5qyf2CaA2De6oEhcUu7q9nm3rou2VrUsyYQ4wKQMM4g3E9sbUVgeYbGizH7Bn6sqeLpSUxCTbJ",
  "key10": "4pi2xrZPw12THtYm7zShdGD68yAvEHHorPoFcXR2tKLJH8h86q5EPDP6WiDaVn3n8FtGSTQm99cmfXU1QxSpPVSC",
  "key11": "2TJWfrxVBDMLc6hx3AbrWs8F2tBAqMZjnrC8ytDUDsaQJqgm9rYwj9pk5dWTR7h9WupKnbjEmCjvsQpL9bXCifAt",
  "key12": "4DuijqUrqm8nudESSkZzeTsWqY2yh4a6Cbk6T1BekmUUAKco9rxc5iaaBcJeGkbTJCZcQbYNf9dQjf2ivCMH4HLb",
  "key13": "5KX4JryMwjKEBDjC9MCZDejUXEtMRgRscRnCmvj5faMjKYQSFSSnGSqoLsW4duDme3qkUmbs2jmmGQ675cKJei54",
  "key14": "5VLrzEn5detqKT2V5dup4cS1uyvswdM42XQhUguNeEC5uubPDMjHAC4SZFX59AUTUhybvFteCvfea2FQFAr4B5bU",
  "key15": "StZ2CvU9MJMtZRuJFeXofTs24VcejWhzHhKJWEpWW9RpCYZUULgDfGF4ZU8q8Z1rQMqZUUFrfuprQSS1BtMpW7J",
  "key16": "4b3JpLstpi8NWwQMvcHF6FHF4ca9rYLHvudccgBanktULnJbqZGXtxCKRv4nAqnpe1Rua3VmaJB1We1FMYFGak5",
  "key17": "57jms3VHKFC9DQztFnPo8XgHfSAFmZpxNUmn5D6gL53Nv2W6AB7341Wnb2Ndf9pf4RmRhNzt5eSGrfKXPsqgna5X",
  "key18": "2DU1brEptcuTUnFzQZpESLodhNnq3KF9eWzmBVbQPQkq84FCZGWeA4dLkuMB1FdCCKz6PESKhAr6QTQjtNM71Pim",
  "key19": "4xaw25jibdn1ZY45p6EHZAcuTNeTDsd5uhAw6WaZ8s3jiuzwJuT1dHF9BZ3LLH6ZW5PdyWpnKrAcmeN35YhYDD1w",
  "key20": "2sWy9855mbbvkUNWj1UmYud5N88ThCN2eLrgqgTBpactqTmbp8usL4XnDExsBKvuufzChVUcAS994FCdPXMZhhWz",
  "key21": "2uZuyL7ihYMfa5CADEqre7BbeWsiVhJubFP7ofzP34hcaYsQr5urwSxz2rqGxR8oEMCP7kJr4Ledg3dwgJ4FPj74",
  "key22": "h2Uw1EKLTB7fT8LNax2hVAxuK8PgSRA22mveLApPgc7JeP121YpQLH1vGfW8jqzFCTZDVnRf8wPm5CKGg7TjZ72",
  "key23": "2raFYmXyMuJSEbLbdfYaUwp2myjrWMsPm5PETio2iUzFqqL7UVQKPZPYktTfcvikaKXYtm4SVvHsAZ1JnADEkM9h",
  "key24": "4SGsLd28WrcVTvDSeihRHbLot2eQXKVV4jtsRbqaWyKuoj73fqgEcpFy1cQkgx4mHSEfctPsi2sDXNfTUCFNxZDs",
  "key25": "4aBKbnK8bVWNNAz7JTp92Z637hLggmdLhT8YcmkmXiKYjcDqQJiDB6kAq7QN1xqTLzdCmyyJ5Qb6Rotmg8shBc7f",
  "key26": "4RvBsN6ZrdjZULCtAJ1rh8tHGAzyPHhTQxeUwYfMaeTzZYctPU7eVSGhERwcfxGZSw1CpGnwo6sW41rZeKmEjfTE",
  "key27": "49f3NrE21SCTtmNRUNDGan1uxdrLctYTyggDf8gTt738GLzQJ48M4x7pajx36exYWdAhfK9KnEemD9LenXU9pPwM",
  "key28": "5mRHkrZbi4EokptfaZDsKn25bxkCtfAoG4zhXtKQ4uLwo1jX12TqymrCb5KMWyvmTFkqHKCRsvaiN8fAfuBdSGkf",
  "key29": "2LczSGDhSF1p31JFjWq1mLLLDg3V367dqeTqYEsS4QPT6N1H9qUhm3RDSRTWCwALEuJVtY8Tf58zEfEQazmx6adK",
  "key30": "CLyuxMdsTvFDB2Qq1orXrNuiF5SdL2pY5Ef798FVfWZ1ReshnuKyjz9a9Q4ZVSDcCs3oBjbZKZWj1Ti4HoMQAYL",
  "key31": "ZkPmMKDMJyK5KKR249hwu7rV6gLkgfmvFEmHr7McnsPpYAYdxQGr49jG4mPuVrWaRaPDf3Jm6tNeciiwcjexeHJ",
  "key32": "3gwoV8wegVtKRQXMdzjuihzXHZ9XfbP9Ny9MduZP51zfEHSgknwpL6Wpm3sqvA1bfiwZkShHKCtMZ9bGC9rXxxsT",
  "key33": "3btX8ToAHHxVotWCrrKmhU4kyAEJ4d4eSQ5DAxGfcSWChaUK6WqbHoxS1n6sYjCFCpK6VChjqgNahyCkxtEHqNJG",
  "key34": "5owmEsRXoqygvQtdHQ8ZrimsWCxbmdq13PDmcMYhtBGiods87D946B4cC46bx5jjniWahSeUEMPM6Rk1VvwjDMba",
  "key35": "5PVCCKmrQrxCpHBZy8DQrUgTAfgFrnkKB42Rur8ZS6fjsJiPPgSB5qWJajxN8cXKC6Zjo7GUvgp1RB8pQAEp9su7",
  "key36": "3C1pGBFpKqmtegdSCzDWzVNZrnp7kmynBiHBooBDcU5jK3s6HLcibSgLxPSa2uF7ijP5DW5no61Q3gsjCrCJnfw2"
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
