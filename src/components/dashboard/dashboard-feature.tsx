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
    "3g1TpDSSCR2GXBGXvvX8ZsG7X66xHyX9YJvUdJ4pbq4LwmabDe5qp7han2LPVCBZPxKBzVSVHYUKpeh7sQ3tNRnr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hV5Qqs69J99fTS3QGsuwWJXeQGsagP82zY8Pb9Fe7Evg9xHx5Nzrs6er5dnxbTp1i5q1mXzDLPoTCqrD3nBbr4r",
  "key1": "4mJwJ5QhuHgFPaz43u6ABXN5cWseHHHktdW3nxwp25bhtwcCJLvsB4RAAFubFPFYJaWVYLoPgk2M6LZeMKVMRgi4",
  "key2": "3Nx6ffVvS3vduc6U6sLxYjjeuw95fGe6Gu9G8b24oL27gkLV9vzYr8Avk1v1vYsTg2u6iZpQ2KTJFcFYoM5kP1za",
  "key3": "1RJ48NMEwRvREb5kCVkXP2ga8bTDsqXbsh7RGSZcsix1b5pNXGxeshpwG12EGiqudfa3hTSE564cTNr8SYbpPBg",
  "key4": "i2DKbUSk3HxNFQ4yebmivQcYgkWn4nNte7LL3XPyCTi44avNDg2rTdgcZqqtteaor8RAKd1A3PGtyeT7eufPCjD",
  "key5": "4wpJteutz4QoJY4RCiorYHWja8RomhqSsE5eC1Q2q48z3vgRLTr7HP8MepXq2N3wXQJqJssUC4RoetQUFXRPYK5C",
  "key6": "4jaSJWHUhJPD8Zad5suahnmptSSXWkkqFvySEp8264QqJKi7gQVWeBwFJLaafWBaALJiwzjZieUznxrqrU3UM3aC",
  "key7": "4om92RekJ6GobeJy8MUUhRxJBLdaNqqXTy2MgLzNeiLzWcL4ssLoi44arMnaqKJ3tokgdA19Q47thiKuyHvGvSBf",
  "key8": "2koAi16JZeWuxmy1uyafSwDENqBUUtzfeTWhzwh9dWLKJww2H2RBa9sWXoYgJx6fRX6i5y4UHucNXMZc2zgV13U8",
  "key9": "5rVpHep3dkmgqx7VPteTfq3ipxFgiagUnxkB7t38wrPfm2z6ChNhtu8AgxT85qGwUdEUn1oDDwLsmdSjcSeqCG3g",
  "key10": "5skdEBcTpPpNE2xsWBm4qz6Gv4SBMnEKYPjqSGsERjPCTRFHqZnfUfSvzJbwVDqaHr6MT2xoLZ6rGha8rQoQVv87",
  "key11": "MtRmwUiXqwHkfLF7AEZpEygK2BTh6FNrKBkrxKxJ3uJRFf6AuK2mgyBHYWbErJkFiQR2Y2ZMKwvzjdBXWJrnnPx",
  "key12": "3VpSMR95PdD64DF1fGpGMPGpNUjW3eXzYELr6vhzKhAV3Z2SC8xt8jDHqLuDvP5Y15Do9k7h4YFGJpu493yqCddu",
  "key13": "4aThx18KTYwQRFefKJLsVnxfxvPW1BSSf4wpdNwJQ6QxxsZACcPBRsjeMQXiEM9ABxhxdrK1h2JgFMwivbqSDQBi",
  "key14": "2XrjE5uBAtS8d4L4DqRckb1yoCVmwKGSsMs9hXAkWmjD3geLSVtEPK6bFjCKDHfh38hbNQiDVwB1fTvP9j6xLQD8",
  "key15": "2NHFWjteV1v1Xk2LgNqf8uz9NxrwCSDDCA2GzTpFdkPmupiHnTnmCk7yHfdgkD94LSq7Yber5BEn87DfanWnh6Jy",
  "key16": "67h3C9XHvxzrJ7NbQHYs4vJWfZRkdtgLFBGazdMsaBxmk4dfLm6xvtj4NTwvayDhY5znHtyoMxGw4UaUmPNoMpoC",
  "key17": "3htcQdpKEivK4VzvH1idc61swihoVKCRmJwh1yVQZZi7cHw89whgEzGkcohZjiwoRq1EHcanJ5TpAyAcweKRLmXr",
  "key18": "3rCLkDoo6wGVWMGMeY3wDbctEXD68GQHbLebNXgiTfPaXKXQgXD3znywM4Xwy5SjDmFMPRpeHJ2f4h72tHHVfXBm",
  "key19": "3vddSwcJu5bms8YxFquXkW6N1b3KvGSkgsGiP8xRWtqM9aN34RCbBj3JKSaMjKPiN8weRBy2ArQCxUJFNJPLcpGZ",
  "key20": "FMvuKPrh82ct55wDPDeRFuY5wE1h9fZFLfbfACk1E9XeJcS4hne4yA7qAUxP1fe88rYQpjdnLxFJ89SoSZRxkMY",
  "key21": "byMEB59k6fi5onW2TiJGYWwHQ3vDZEu3tk3H7CuavrKpB23BfhQVBThXX1FMfctqdJ8X8jzaDuSz7wwEarNqfqJ",
  "key22": "5KsW6JbADwpve8vCeSwg42fYHfcpPRCtusxkSW4rnUxHvUsEUxu3xpozocGRmVytvSACnYbiXYukmiDnPRy3oD4Q",
  "key23": "tbTPtk6wYhHq8eHeDvATMHoV9XYGcD5DBPiAWQvA2FavXzVSDbHMVV7dcXy2enkdGmXof5YSk4DXUyrJidx8wkc",
  "key24": "5UTvue2A888iBkDqJyB6nmx4NCDANxKUqYoc2Tdm9HxCwn38AfGEsEp2AgF9BTBQCW35PWruuxXrFUK9Gp73DEGZ",
  "key25": "6489SLi1JKgeacJu3cV1fTxR5Ms3Hv8ArN9fLmPmJ7Yi4SUn9VLbqWowJWVWNXUKwYg5GBRx8YcfHCCUkVxqdtX3",
  "key26": "2Q5PTFcFx1j5ywpXB2TbPrfd4KP6MkN1N5pnDNRM8FFv7yuPM1vHgji5d8YEbP1TtshKB6KQ1LMLCaUsGX6XgtkS",
  "key27": "5qGVRdMU24jUiMBU9dfASe6z4kjDXLpt8rr1ugEqUhQiADrpQsvzP94bSNwb6qnrVb85D7u7peQfZPB1PwGg6B1i",
  "key28": "4MKpuRVj7aEbc3wps7aCBvJ9rQKAq5ZYX2BjcTSGmEkmtMX7FGbkJqMyjieF59mXnaC3mjhXzx555XcWPPj9rH2w",
  "key29": "4bnJt4e5HabNqh4DPfmBhRCd91bcbfSfaVkGpxwhxp1VpVMETt6woHKKcpfjzxVL1ayg9gi9U9GAehhhkYjv7oYA",
  "key30": "3piVmLeg5dTGtc3AzU6ZfhSd12VbgQk8d1SNuGCrSXpZZCxV3tMuuj8LUZk1cLjw5YCGGbjbKXF9Qfmtut2A3usF",
  "key31": "4tjrU53VYEt1nboQ41Ajs8d9vT34u4WwTXe92appr6A51CGVnGvwfyTWkrwHyWbDxxLEyfofsbaotpz9YCVvmBaz",
  "key32": "3oo6E92N6fFiSv3shUP9ueKKke69EErrbcoEbeJpynDwMzy4DrAbcSPWWLiEx1S3sx5kXPsZ2hwcbc2DFbuyJUcy",
  "key33": "3wsrgCpkk9GY8RcpzfmXAuD8WmanVDwh9s7JUqTDddAD9QZYWy8cG66pHEhGoFh7ViSYgaGzxWTjeRC41FXMLrMh",
  "key34": "qQzQbSEw3vT5b6DQE9AjZaKvwQtnf6atkp3a659VPgWQnrGS98ZXVeCALhJpbKXTpLBYHiyQ24KvKyq1SDLoqHj",
  "key35": "3j8uZwSsHEmnMiSSomFxM4NfPcpZtFn3ZsymXbRpwBio6D5sjoUveeofGoFraNJ5yAU4bcw9dHQbbUyMuNejAhz9"
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
