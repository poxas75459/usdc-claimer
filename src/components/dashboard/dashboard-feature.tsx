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
    "5z5jh6amC8AZfDXkAsXdhu3wXAmQvY7kRsNLzrz6chLuq4bQZC44QVifKjs2Y69hk9gGPjYfHaBBvdSywkpRAkMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X3fBCkWsWVqd1Ak3jyYnhb8VMQjqsnvSek3dMxRE18qoPQpPhhMgjne9BGKF6mcNeefRKpKUa929KesNEC1VewZ",
  "key1": "3FL7DruLNZyVw1CaTpqevAH94TgeBaKnfPRSohJFoy4GatMGch2N7Z2TSz96Z6HhATmAKFRmVLWLP4P4NvLhCyGc",
  "key2": "3njbPDHaFLH9qvm5B4ngoKPtx9oYsBqG6otLYizhyjy4XZkAhEsWwa2mYctoBCTGPbipUcAWhjnyEAM798t872FU",
  "key3": "3tCMhawi8FEVUjFZRkg6rPmvnzHjcj1u3udDTxRTSHT5Co9DstAp2nJvYc3QdEDUBbFXNtJeN7nFcvjUeZFbNdWn",
  "key4": "2xWD2p48KE8m4rxyi2fsc6EtceiuiaP47nTpvZaUSCNe93TicjaiR9o4crjMSpbZD4gbCBzey2dSvMVqi7HkMnm4",
  "key5": "3DzUBU7SwxbB1eNf3DYvi66PL6PZ7wBQhRoJTjhyWS4EiKW9qqkkUwwvw48aBwaoHKePsC2EyFwYZwUS1Wu1Rvgz",
  "key6": "3KQ2cb4PoA5Zyi3M9qoVuBpkmN9WaSkfwnvKfhV7Qm3SN85WLKSgRwdgE2iioErEpJcV9DBVaDZdy63d4MsWxSVL",
  "key7": "2iL3NM8mRLL3vLEku23UU85WYEb54cv8ndqV6gTxP9KF3hAZWiKEoBhX3pGxbm2LXfAqwwiEzRFVfxas4LEE19dc",
  "key8": "3axficv9Wqi9YWLtXqvnsCiUTN3vdxBW9YsNZGutyTYow7qyxmCeT4QrFjQpxCEMnrocoDqnrRQeMxwmdGeLRVgy",
  "key9": "z12w4M5cSe6kjbn4oVDbJmdSQJJKjUfoJtzvzEDkUGTQrxDrfgSRB6rWEebYvfMxT9dzkDhEwEDNs9td1cFyLQN",
  "key10": "2DvsCMZPSjpwDxtfNLaST2eHLvQZQ1YBZBJ9jZwEkTC1nNjq4XsjggNuyfSL31SJitLfr4EReEuXjvLmwJd6v3ee",
  "key11": "5gUrVQhNaBz7zTbLbRFuJjMz9S8AMT7kLdRYJuwZpkj8bpKEazzh8iaMvmUs2Mh3aNpqmrjsE5fSQDnZajAaC7M1",
  "key12": "5D4RdR8ELc7EC6MJboMAxji8g7fv47nbTzuQCVbn7WhmrbuxCc9qY29P12DSopetWxdt1saBwFAcfdCeuz3dVdVo",
  "key13": "53F4UzcpBn9vvG6q6eKzgxaNWb68Scwehi7qomAem1jpLZgyr8kBzg7isSjYS27dWJkUMk6pu7De84gqXnXTyS9k",
  "key14": "4VZyjZiTtKvCBRJ8DNWT9wSYzC7tYVpZLtVySRwhZxw6WMeZPwY8L1rSNt4nPsfM9KajBEWaMDcj87f5chJJRvyR",
  "key15": "3SZpUQXf27osuM2u9LGvHkvycxgB3VwYwfLYC4ru83D7Z4B7xXYRqFkgjSkSKJmt9Tx6rMStEvCqggt8eCShCgao",
  "key16": "3VsyycduS8vyfpHnxKCKnP2966SiNyx3Ex6ZwwruVE6WMz3nUTcXoWg9iYSZ5QuWwamB6oSNfqsvggL1fGEzg83D",
  "key17": "47GKpebu8nJr1izA7YNuFy1fxRrxNWWKEA7WAhzj1tYjiVhpVgXPacgGQKHBB9PgY8r2VnSQr119Hy6GEBsRS1xC",
  "key18": "47wbYjz9YoNQc3DgCYmjCfNukDsVpiErrM8CX1o7ikpMroEV9tz7J4c8fMn5sYPwmDX9h2CaByVpfTeuK6an89tV",
  "key19": "4FpgkF37wrjpjxLBUpidx676HcAwSqpa86uybdsBAWUJM2tRS1zgPYYBhzKkBn1MhygHa1ydAxCAP6e2oK8SENYp",
  "key20": "5K4icvTYW8EBA3EebmdRq5sWwthXhBkvJb6D5nr7TJ2Hygq68gRM2kb5c2LtsrmjmRNVkS7hU6Y6G9WCgR5nyQVJ",
  "key21": "UqX279FJz88RAXMehLHL6Htcy8WhUt7fhjAJcins5G6stsPthf4NSnCjFSTHjVashbvBnXRn3XVMAc77CMkFzo6",
  "key22": "58WxJ9E4KdsYE9oWVX5s28ijTcQzD4eYYerg3iJDuADFBJabnp9zWrfF2tvH8F1GRNYrG2WJSzgdzHYxoAxV9Fs9",
  "key23": "Ba2tsmpAtwGiLggnh5MtkWPkN8JBsj7Rh4x3TbqEG3TeMqSc427DAdgfsnfmHh2VdTjzPrZdiAssAqNSXm8usix",
  "key24": "2VxA4RUNmQffrUythGDgZqZAm3wKbM8vPEYteyyJEbD47PzE6LEnJ7aLLYZHy4Sc5huNtXDaBReedYAvutjZEbWq",
  "key25": "4eqpdDN2MijcHxRM59guTJ3nR3MrT7YPh3SpLKyJn1brL1c6tmQNtKBoFgyveBFLvSAyG1NUkVpfVpgFG8t7FQvJ",
  "key26": "2riVUpW5LRpggi1iFLAKdssZQfy3EZZgZjugv3PwyWzYdXYPw7d9sijd7CK1KTJura3BJ1CDpHhf2uitkNegTFmU",
  "key27": "4udqE3LrcCfoFvCjbSDsf3Hxodx499A3b2cTgPkkpYtftkCBAfpoPvGDgop76CZpbFHT5AiV3zCphRx1YAVkbwBo",
  "key28": "4He94khMtvYKhJC2Qb4RUzfhbDyzVEhLLZLtfkbchTSTVLaW4HUmS2e8xpDrPDRzHkKYDEWsmygzSMzTR5taAM6i",
  "key29": "3LHbsyq1hcukoqVoMUmbjpENjM5Y15SGAMM4j2GTKSBAKnzuSf4nmLtJYjCh55W6vwECWxMokCtWofBBKXqBsFM8",
  "key30": "4V6eSdTXjEcKMUc8CF9FoVfeDWSwUUUdZ6neQ5SJztFuUKAWFzrLayDgbEdjucQNGrED6PzPt2f4bVR645uS6Qn9",
  "key31": "PU5oRMJWtkaus4JpaWaRpoouufN79SSshpBux3GphERh4DZ34J5oEuXA76Uh1w7ffLJk2WaJbMQR3dK1obfLVB6",
  "key32": "b58nezn3tsK9E666KYqfUmwErtGv5VfccECYu1t1sD2hPn93bFRkRmvNEmmFNbpG3HxPEh3BXmRKm5wVQrVBzSU",
  "key33": "3UF4d762UC9cK6snGhKqhYXGwVpFs12BHKCxJ4anbFYKng1grPiqWrUsKdVnwC1kEwqLRWBKtog1uuifcpzypuTy",
  "key34": "pwqbAujNWUffTcuaEGvcygYMM8iNBRLet269MccfbHhYdLpEwZfVpwUjkwufLuwt2sQVCQ2mq9RLm7YuxvqzvYe",
  "key35": "5SHCtfhjVJsRuS4LPanHoPP5aKp8T89aZ6X1JVaxgvTfA2k46uLjXLYJAvGh6gwEcZi9FM8zWUevcp8V51fB92bD",
  "key36": "N7976jRG5XVmyk2MrToRkJeisbaDd4myM2Rqmu8pC2hPpwerrkNkGUyUieUzWsZrCGn1J5MF3icyPbNyG8zgTr8",
  "key37": "2d8wRuDN1zU8P67fZF4e1HzgAo4GwSzRLV2auZEWAKS9nNt7mjMwGDZ5TMAv3xf3wL2FWqHjzhrtRxKFZwqsxDZ7",
  "key38": "3Ex6eVpVzZFNoG3BEN2wBHY6nFm7VS8n3XuDxSBhjVdhJy1S7EtSMRktjKoCxRuzV7NuQPNvi2V61ohCmkmTNagq",
  "key39": "455dkJmBkNjtXPPeKEfwTQE92AwDagtPEoqjzs8HEoKxWkxYyhxYZhMfwBJ8oq4TzLQ43QZzKenmB7tzvpVPiMVv",
  "key40": "NDNq1Rgy4HYzGLLwJQrMMrZvTxQzy6kDmsQxXZtF3otz6KP8BNCARVdmnGU1jY8WG1c9zEpq9nDN29iox5KbHcy",
  "key41": "3bR5ZWkLxocEM7kosd32HusfnMzXbVxbG2TwJbpsftXVbSFRTWuQoBm5wLYgfwSEhktYNngEhpoCT58DriphTPR8",
  "key42": "5kyDrFFo3dSGPyoHYors4ZWCPRcjeACErV8RMivtZKGZVt9LD3nWWhEv4GVNQiC2vUBxaAkuiirsKJgXT9jhnAG8",
  "key43": "pp7wDUXZ4jEzZPXMSvQbiSwqruzBwtnoBHN7n5KHzPyxQtkPRZQh8Bdd8W45AupdLe53VnW1YxsnnNKbKdb7cs9",
  "key44": "KkV5WFmpjMvxQkVaoc2CsZixxsxpt9aFWqFFRy19K738v9i7QJpALXEUPJjJ8Ly5nDMbLZjaDG4mu61SqvEARDt",
  "key45": "Ve5THhawRhFsiRCCTLvQGiBfg32x48VKMpnFAu541vFPp8gdedEbxbTN29MZRjiX5hkER272HjLndTQ5BWBY1sR",
  "key46": "5xbYiEUKJwEtoMMwVC5vScFr8adtV5YdBiUoUNbydbgCvT7WpgzmzztdtSRd2nVcaKwBz69LZQSvg3AaS71FRzZK",
  "key47": "28ktKeiovAnx7JBDXCVoF8gpFSDMq31DxiF8zZJDtgCsBE34ZYVwKy72X75Cfdwu3bGVaRyJHfP2dDwypADrtiDD"
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
