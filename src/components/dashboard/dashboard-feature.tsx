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
    "3noP1UUfFES4MLF3Nvte534hGyksL65X6faS57Nmu3BPYS7etua3ST6yMcc3zmosAZFfVMT26AUnJzzhotJZ8nGJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nYFdHvwsH6CBxhL13HUQ7PFap72cfXk5XumScXyAL16jgDUG6WBGdf7jxKTkpeKkJa1jNP4zarJcRLvit2bCc6A",
  "key1": "L4iPokhQ1MyZonhPqeApMub1hukUDYo7Kx8W9eW6eUtXGMaKEgm97GEcKFMGD1PpTWo9M5bG8GcrnPx8hM5dUAB",
  "key2": "3qgBooFffGZpWDr3hfuLDd6htPZ1KsE9sy5bMwao2U3EkhHSzKBtH3SB1skBDLWUpAdrQfYCGkCpF2n5LBgr4uRJ",
  "key3": "2giijpFMvpFwRZvVQn11fwPPthFV6yBig1N6rAhryouKNJnv8Zut9JPesrCuv97TYYycgojBPZEVm9xV2ruU3rRz",
  "key4": "5342TNa3eAyLqCk6hPJT7udkoFYEtSLavRVghbBLPiQn1ARVkvasK9dHx5qC2wrdbDpjzGyzMBnTJWJMCVCKoZAa",
  "key5": "4PYKXUK3E5bbGpavywZ5cUiVQZvZFz2NX8ZW5YKB5jUWUZxwXgVKhZaY7gPEdZx6k9xRuSrKhVZN4JQkVJNK8cJL",
  "key6": "3sJ4WpXXsri4boVd195B3bbS4Pwu6WJr3mCHRxpgsk5LTdCWdQwMGb7NuqSoaWwpBJUBYaN6cHATqAcBP7ANYRTN",
  "key7": "2U8Nr8LncYFEcVcgrJStfqj7YG4HThQgt6tS6WzCFVRRXfyq9V64HnpS3GqX8snFrtqt3v2gJGQS4i4GQxWktPc9",
  "key8": "ysrHv3WY6aXSsbWPoNhHSaxKNxHZyUw4pWetA85JmACHFtH6ZyswvNEs2QyFJvExoPYnVjpDrVxJsA51uDAMGgY",
  "key9": "5BotrTJ5qAMgzfmK4oZEB9m1ZEsYECy6S6zGX3cERdPNyNTFUGzU62Xrpkod7pQBnnHPoMLtkH5rawYvm1dLZ2gT",
  "key10": "3MMCsd7HSsTUzfNVvpYT6mawmQwV5Kjv2eUgywrMk4ZTkbuVsALBB4uFfuZBhi1iUCK1vJzeFjhsnWNcnQFsfsD8",
  "key11": "ifjyRrNHD57h5ZMbrUogyPPNpK6PJ7NmgRn3PYB2f22nrTEbuR2KK5jxLQHFoMGfrGzmeEEtgsbNmxZqbWCt9gH",
  "key12": "3xmAbAkT8185J2Y14nmRGVm8LQmqfgYH1LQJ5PUfxVa9qxSK1EEEsbx6JZzUrkRFK4itnTVe3F8cYCFAN6sssRsN",
  "key13": "VGjz6JuqK4178LUUo7L2CYqz1rM6UUafNyrvqpVDB4B29svKyreVETpSvtK6PJUSA3FJbimJ44oqADyuqxsPg7p",
  "key14": "5BqWPHpnuwNEsj8caxJA1AvgFVvaebDqxKa6YLi4U7FiqbMa5aZuErTNzhiwm6Ds4ppuMD2CmHBRHMottU5dwqaY",
  "key15": "4Vtrhu7eDETrHyfy6vyiyCBeVUVxKcb4PRY8aZZ21qcPeBGxA83mkonpno6LALKwdMVMbXuCTdfX6eEbUuKf3qea",
  "key16": "5bcaAuu2eF8iwy2PsXp3M418SStVr9QVdWHuvUKWTVGvAXuCDzDTQBFZqJuowXGA1HJdhJV42dm1akRNwkyZCehx",
  "key17": "35cm6QbpbbV7ZyHxS6XG8NmLWnrcsk1cimkfK7BLiCs3aW5jUJhBZ65DnczKJu1yAfYx7bHV8xo385AkDbFJstzD",
  "key18": "4Hb6edBS7sNAjmvUiGEvqQiXkVCGtwUTvGEfrkKapFb4RFjyYE1d7gDfES5hDcfjJDr31Z4FgQE4us44WyXJqVL",
  "key19": "2f1sAhM8bQsEfK9542ksj2Fc9CBdqJL5pp2ZsAMLyFR3ug459G2fVG2V3LJxu7NWhWc66BDpwr2wVgcpUnA5cUdM",
  "key20": "2X2bk9hBcvtBuKKBCovd79pCbx9VArPWf4KT9FQxzoQjwNQeaRngRbpz9CnigB7UXoA8ZMSyebWaz7c1yXPYX5Cn",
  "key21": "2LXu347RMMmaAyZXTnARfQV7hhGDMSfuctwvXYTFaugo7X4HdzpGLr9wEUzqyubkBTDyqZRaNcBZnNY39JKsuR9f",
  "key22": "3wQp2AjwjaDUGT2LCfmPYkevwUejAruRX7fFF4WXYBGke8Eojva5sGLf1kvBt99fNJM3A4mLwSznReu9hNrQ6apu",
  "key23": "42DHNyv7BkDXFMu5bByrKbfCF11RFnQtgEAAmMX2u9QMQ3eENncPjzb1wyawLeTVezRsUQYpzyXEeTY4UmMMARpy",
  "key24": "4qqU2YMwLcWyKC3Nmav6oNxWEfDJ9bzSUMwibbopx4jVG7VDyRftgq71ZfiN6mpp35CANwgqR7LSEmgceBPYrha6",
  "key25": "33ffsyuiAp8Gd2bNCmtTQpTXK4iHckn91cxh1QTtmdmeR1jbWk7hicSPcEZcNRaMcbAye5eti7Ptf1dsoCmwiEuv",
  "key26": "46NvwpQa7LCxVrVUYi1NY88Kuoqh4z6SVw9HawSnfBGw3VdASfDT71SxiyADXyHQeHTwVJS1EQHwhNjesyu8cPcp",
  "key27": "43XNnF7Aauq9XQDWyRstVqCRugckdoMoXprq87wKeo6qqXUK97AvSxPbCcrHDnQ4eb5WZ2MZwn8hoYx8JHHHXaih",
  "key28": "4coSzZbqSQEepiLHnNEn5mfdJUg1MUt3HteoVvqaiNTyg2RaWiAe5e8LWS4rzgXf6V1duMDVZb7PRDDSam67AwYd",
  "key29": "LC29Nxzkk3a8Sh6zp56jKaqj1CLFyo19p9xiptS1Bx8xZwyG9T9aDdQLoFXH8mUr1gzCMYJkBAmHQj8mR3tizSn",
  "key30": "4rcYzEC1RncmSzfYVS2d2rUHNYUwyDMVWb3LYjkVwQPacEZfVuhWba39Cbi4qVX1A8mRw6ECvqGYDAZgQC8zMYUc",
  "key31": "ZQLV7fT5hMNSqS33s6ZdLq4YebNH2mNahErHa5obppUfJxJHoDd5oxRv2G3dghqvrM4zRuWJBUyUe6K1RRWunJP",
  "key32": "2wkX9z3qWndThtTFoti8whBKgW2LoFFjzkneyPsh5PCWQpPP779JShvFaBvBDnmSZaeGsW7GjHBPVDf3jcGbxWuh",
  "key33": "2WgqbVP3oPJWwjkUSPMiF3bbQn63cCPZEMP8m1zmSzGpkenyUEM8CXQixJYAK6sXXhQkbowsWbWzQDLoJpAydr2z",
  "key34": "2bXJXBoo4S5xRnqP1ET75pHJZjiNPumVHMTv2ZTb96A9W5GLXGiMPpc9xS6mk8gNTu7LY1agcw7EL6H5kEwPM48i",
  "key35": "5nYibjSHi69BDuWu6sX4SY5NChEWEx8NSjqU9gpHWoJG2EVNZTXFQxUdSVCikX8qqPSAkWsZUyXRY4mheJrTLjj6",
  "key36": "37K2rX17FHAJpEGSppujZ7VDGpmCmWUQyn1X3S1wuGpYfL5FqgVS6eo36qmiHEb4sCQZ6XcMmi1LnuPCM9YPKihy",
  "key37": "4qKdSeD9fxkoSG4vtnai8oiZVs5GHi2wqeaSNxVeEYJV1cSbtGFFa6vcdMHXaU4GSiY7e1qLHC17gXhK3aKdd5s8",
  "key38": "3VCwa3GSggSaTPYekWY2ZWVQFDnVrfDoWXrnv2gNNgUzyY2Huxe9uqyT9R7S8yn26phC3Lh4PzNbX6sHhF5eStDs",
  "key39": "5ueExEE8Mx4n72kcY8RabxDD2Dd9kCT5iMUJAeEbK1UXhW7cyXA87hJMXfCKjVq3bwWMPJvCUcztFkTuQfqW8oGW",
  "key40": "3EHyoHkMb28QutFMb9gwV9MeKyc3Lx6Fv3Tyo6KAbLhMDt9drDt8CCYFSSJtUspsGDfKKAqT9EAuagTaeajmub14",
  "key41": "nZf3gEmDoyBvP9ZWKkUeHJ4qfvbrvYmjFU7TQRX1BwJibPY4CTAxe9MraPaD8jcCTEdTgvFHTzLVVZYDDL6RWc3",
  "key42": "4e7ioGpXvQr3mRvGdj3bueBZ3i8RSe1rZUjUNBCrBkaF1nA7rC1uh2xCdb2KSJu9QmuvorkwHjfniteW9poc6NuY",
  "key43": "XVjkncZmHKnFj3ssNaBSfpEv5wfQxqkZS4aydGUxRDLdNkixoQmSHDmwd5bHsE3qvbRjVaHnc7NUnQNZqyTSMyp",
  "key44": "5fVGGjJ4tRFWftYes5GV33we1BwB9VDY2bizDsVBqmph6Hg13RpojueKvGa63QaTtqF93Egzs92mGkvaZSQf4pac",
  "key45": "2BAQ8axgpeE2hUppuVVehC9kkCmYGWzwMYaMiTKqFXhtrQk18XBWb41SJPK7AAoefb1GJzc4uCLDTV4U5rSoJNw4",
  "key46": "2AJNUCMbwKu94wrJLu6zA49otX9WNRJWkBgp6ZjaAg4bD128eCE8a5Y2q8SXJzMJzawcFfqcrfziyt5K6wDKPQtg",
  "key47": "3CVx27sJ33wnhpAzgt9pD91bz73CLhXpWGBdscJsziqBkGTsiW4ovvYMPcwxpCKGDkZSC7Zm2ePPRC278kYMxjr5",
  "key48": "3Croi6xNpXBmsPtv4YWpps32K9iA1v2z9y5zkye345LpeAPj6u9PnnVPZfvDfYNUmRLHQs92inXsMmwrteEYBuam",
  "key49": "4Uhc4hpfkLBWCqzHUrbfZhh3RhNdouikiki3yVapHf94aTcaafsz3JUCFnUitrGevid8fjfWPisSXgkTkzUiE84M"
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
