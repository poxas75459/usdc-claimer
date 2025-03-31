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
    "3EbqCAeUguGUef43jyu8PvuZ7j5Cq7KftQKbKw6SG7tFzr1kucLNcK5F9g7LEjzoiWH89kw1YMNioMrJaZ9gBTSx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cpxEuzmePnUuuSDDpFkqc64Pr3qyTceNTBs4szXsHp8afFoEZLZARzD265G5mV3fbqRM26vQ8Nyhe8BAu86uUNh",
  "key1": "2w4uPUZqKsx38gUaHw7hvrGetjVTMiDDGzwW3ecs3H935LzjcUTF5NA7AjVcRS5Cf3YTAuNEXhZEVZyaQqMcga4a",
  "key2": "4NtT2ANFrRjzsvsGt1Qug6oW1ftHNv65ZqAcsFH5ddRnMrZhQsoRkCRaRZByPdLoxzT9EW7BRFtXL3h6LJaHB9Ge",
  "key3": "5tY19YJX9i7ATm78ErAxAhrTcJFujADtt4UqSFGcxemzFSb97Prz1xaqKXiVBwCbgvsKK8Jwayj5wFEb91XyM5tv",
  "key4": "5e6eaPjRHGzq4StZ4rTynN8wRMzLynfVRQT9CGgPswRtVzAoQfWh7edzy1yA1MN2vWyqVokiUxJpnT7rJsxnHULc",
  "key5": "5gpHRabRmsFj4tUDDzE4JhsdTuUESLoyexEMHkgDSGEDyxBwa4MuUa8XfujU31aeip8SX7fSrFEKnt4UW8fV8gBj",
  "key6": "2LxN2ijRTasB3KWA25hzMnbzMF5C1Gh6iqH9NxZC3hNte6aevXZcoaDWS7FnsX5NoVWXtfgi7HZi17YHMCjDHmnp",
  "key7": "q58otjwyBVEDCTLr8HpgYSZBsohAPGA3tqjB3JRmWnFrJWEKy43urLuzxHGbzFZrGgZpa1V7wWznowwhuu1EiL1",
  "key8": "68SeMG7M2FX7n8YWMMbgWTz5JxetgPXyKqb9Auw6f9dboLZxgLsK5fyScZ3HTS9f4fNNP8MSjJTAb4HZijzGtP1",
  "key9": "4b3aks8qCc81zHtQEzS7Am1h2SeaeLKtmUvjcyARQ9Wc8jYo9CwT8f494DYa5UtCRWUmwvXtdnHDCQmY61nCGULa",
  "key10": "2rhdozqsKFoSpGZqrC99Hh99xko7tdhwYedZ2dFdFjsxaU8WzeNe8yNJQ1PnSPS1RUf1Jy9HLxiPWLkA5MzzSmU8",
  "key11": "GdTJbpKehHSk4DSiVc9W5TVGDhekMBuyEaQDmJF7obWXAwrthgWNaiEfT8PRCoijQZC8Bd3mPYZRvwUT3kUaUzs",
  "key12": "cTaXrRLzpKadsZUhuLX14SLjSr8JHu97GEfmhzxgmWojyxfQpL8qFJRkbPcQz9QUyrmN8icmhcNktCDPhm7DPyz",
  "key13": "3DLeukFxtwLmiTsxRdqYknE1Tn843TUk5eQhLpeMcF1L5ogYg8Xa8kJXMhDtns7TQ9Kpm3iq3ZM1HDXpi3PBY7cp",
  "key14": "gYa4pVdErzYsiBGFcJgW3FeM6jhFeL9NMqT8Xj17yRXZj92mBED18y2Y9VkTS5cgEukAVhgTwjmy1pJG1nNmSGt",
  "key15": "Bq2BbEsH4pebB4ayC1XFc5DxPAJ6z4Hev7YJ5Fngn57MCGvM4hsdqJV3Tk3KvvqKVNZtucsukSGVTRAWuhK8gBS",
  "key16": "52ZrewGJdb7SiiCzad3k8Nr7gbU1psTXt6Tvut5griHvjit2Yz5ZFKDSQsXrMvibB8ov8bPaL3wxT6mVvnsdot3Z",
  "key17": "uWRMWVNLYpbA1KBQdx4jVzKvmRyUH1rW54RKwi21jxXzH3yoNmz2eEcc4o8SVdtwwJxouvt6ViSbis4zyUkP5EW",
  "key18": "5nYJ5YeUswbueAuf1DWSuYhYTz8ANTcXKAd77yuqtoQZVm13ZpT5AommDsDTbapCFSw9XwnEWPF1Pi3JyxMpjWPH",
  "key19": "4nr488KaFrVM2Unut3Bro7oWbHSZDcXjnr7JZuXdt3eWUJdBHRAMdWyPYkDhAhrXmt39JzPZd7MhAYrsGs8sSWXf",
  "key20": "45jNgpSkfFRdPc9gWyRWKGh82nmrEdKWL1WVqkN6tFF5LcWkzu21vduGhw6wPx4qUJDTDhm4stScqB8zskwHkrY6",
  "key21": "4Jxp44C1hvUYbWrGSXEMbgJTFLVa9b9cwWityT2vy6cRc8ZnkS5T4C5cyD8AihGjeCGPsNDdgqmPdMdd3xsdkrYz",
  "key22": "27tpTnW9eMiVLCiu7yhSrKbFHbqkQ3K64s5zfnZMgfehJDLi4wyftEvthE3nCEeZSM5wM74trKLBrqJs6Ks31KxH",
  "key23": "27FDaV71ivNxrAiQXx2cGrsLrtqfNZDaxCCvm3i7hU67mX5kHBRHixgNrZAH68AYpGBtZ7ATjZds3Wd6q887jE8a",
  "key24": "65hNcR3iJGbF2RuzN9nooKUw8pYBrGCYP3M48sXGdyxjHZB3fRF8cFMioNNrrEVby8HmnsrxzSK2ZokritvJN8J6",
  "key25": "3srwvCi96XiWiNjJe3L4NuyprW4EAnj79PqJSHrhT84jypGApQoLquhV7cf9HK4wz3aGi22rWNs2CCxygXurypBt",
  "key26": "R8H7JJXi7BLWVxWHngH4a7vh2GmSXroXw3NwaHPAFw1gmLUG9yQqzKR27ibbHqc4uvqoYyYuGM4Q7qtCbkAiYFS",
  "key27": "53pm8L1HYsKQbdeNq9TnLuSKgKJQWZMkhkjrKEaRYEhRHtuyUoXvd9mbgG8MC8BQQenW8WnGSGD4pFnBfWJLGEAj",
  "key28": "pSq7hZHSXcFVNH7VH1YPFwjUwrjnWTAs2fKayUGQCMaBv77eVkfEAdJpjp335ngtJkbJSFmF3zodhryB7sbfjNC",
  "key29": "2gjiujShvfLsfVjk5WgQjDzFNyGhWjGUrtxXyWCavC8cbtHj2Pkt4YADgMMcw27KMvdBJVaUR9re4cMpCmGg6rN7",
  "key30": "3asEa53BAGHwBh2rYZSx2VSiPVoEcvGw6MfGh1BsxCDuipiVieQU2X6xowpmcGUvw7X9hYLDh3J5n4KsFEUB7jNa",
  "key31": "4qz8hgNZ3b9qaPTmT2Pf2sajknkA6SouAKuKPX2wBjBqReXdwMvMNpJ2o2NfWe196NZJuYw47ohKzgFqz5Sx4ssb",
  "key32": "4y5irqvTvNkiVruieTy3uEvSNc4AvrTgVF3wv9d1EoCKHJbYi3gSjETRBoRbdLtJxEYecSz3rYieiBaYQUVibd3s",
  "key33": "4nvYRrkeRnnkPUbHqJaK8YJQe4foi9pt9sLByY9oQXnVgDGsazVgYMAkupZBTWG4t67yndCRhT8257huCDTBi2r1",
  "key34": "3kRHZDgvyYDzCaPn3wrLMhpZMXQ9n7QUHiPNhBpttAr6fa5Y53g1Ag3Upzaqu8H5prpx2CG1bBnmZ12gnYpXfDY6",
  "key35": "5kfVZevAJsjP7HFDUCVnCxMiMWNeZAxh1STwnJjPBkG2Fvw8Ah7MnSgzfViaRuuxp4or4jKGkhFXL9GNhi9z9hrz",
  "key36": "61gt5uv9yk2TUHCJe8MMM1ydtgiYozsUc8pCoC1htMBnsLkqmfuayR7vFzUxcCC8Admv62GzfmrL2YLxis1YKVQY",
  "key37": "24xRNV9NCx8ZJYCegBnQTZKxs6iSZKszMB3istngUwKQta7gQmPCCZQ6TtBWTVx9pcpVioq9EmhKhECdgPoSrg87",
  "key38": "UQYExXuumqjt9UHn5EbaGK9EdphuKkhGzfTKs9fqeAktWty5h3MjEdYcFuqEX7jTuWXv2umb4N6m18pBjuK3DS9",
  "key39": "2ekGg2V4N7nXEX3bECRHquFEwG7DKHzCNRSJcE1hyrU9PRiYbQCWbKCs1R2C5CNtLC2jfSPD5MWvyKtecWvzGQhp",
  "key40": "5kxWwW8sACRJNink9S2u9pZYmm6nqVsKvG6SaxYsDZkzUWMAicfoYNkK2Bxnpn1y7JMJ9TNKRdHyE6tqVnzi71jj",
  "key41": "3AnJZYDjUs3EtjVTUJusuS3oMysZYB8oEoUbugL1h8XpELVY2rRZX82Di26pBhsSsPFzhEibZCpDAPndUbkmemmD",
  "key42": "4ckw5meHk9Ti3KJgxD8JtfgEQ9eZhNAcWXCC1EDXy1YqvtmzWvsZ8UhxKtvQ6hQTVYQsksJKm4rpmSZd52k5xEs5",
  "key43": "YjFjfJS4ySfye1KTL1SWFPoXmgJyHNWaVKY6EYh6PRDNu5evTeX2a3fn32G9bV7WwCwCSE4xxeqzL9fuxQYR8mV",
  "key44": "2n7uosfRWry3gtN1QX7EkvyG42q8emsjFUZE3DvoM6zoV3wKcLBW6kAcbsmGebakCvFK3AG7kGftfr2hRyXszUau",
  "key45": "3899NvSEPXgTiDbEEhFa5KAFoxFAMvK3E9m8LikyJbt5TYjHFNWH7WPbuqeX4WtEcwmXbcqsbgQKKkgHo3wcvruL",
  "key46": "2vaPPE98AkYBQn7qoNN63TCbVuBG2TsCxt8vYiFEiN4W53JFziueE8FEdtGuCph8yABxA7q5Sk2LFZzuwMgevjjr",
  "key47": "zkYKfnnLPiYtwSZ19eksowi3zLpYsdc5L5Xj28k2SdNdJr3sSiQNenuXrF5vY5qpe8mvtUVE5kbMTUhoWWCaFPS",
  "key48": "3bkTih2kSSry83Moj1rn4RzUvNV3ax7wZsSPKpWtLucQPLurBwRekakQTXrngFKPoaZbAZJQzJtsQPKwuCZiDvRP",
  "key49": "3VHjULqzPRWWjgtEDTtPNsYRvb6936mGuFjZ4Yr9gn5FGSCEoo8Th2V4Ehu9UGhxyWzY8qSh1AYCUSNeoc64pj25"
};
// KEYS_END


// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2aAg4HFiYwjFqa3s9dD9NkMGuoQR4xqucaGHt3GXygyQerzQyqzhdVimUfLadTpyG4dBrXw5dbKJzMdmagrpNeCZ",
  "decoyKey1": "2qGYYggnqP7xuvpSjheeH7d8xnqA6chDZtJ3Wut8y82Q9Sda7aVnFjbVoWMqK2bJWSHX5mK1uS6P3LU2zKmnyjx6",
  "decoyKey2": "FSiZdDYUhMio4SE29pkwvGXswwnp1pr8vuVZNyQm3QqCNiyTFsaWT4qTUaPnxvHUwaD2h8CC8GetwTdG1VPSthc",
  "decoyKey3": "xE6pcTuBSR2pxrXiNQLKZkAZs68BHV5mjuphbgmqTe9bwxGiSV8SHBeRZ4Zp1ZNkZmA4WHfzX22hWbLwesnhL7n",
  "decoyKey4": "5VgukLU3zcHC2AYnp9yQiWx3cMp4hApu1pzJkUa79mpPYP1cQAbB4g7zxwi9jeZLLskmXSF61wWFYKPVs5EnuYSB",
  "decoyKey5": "4UMcboXyebWhQBDiXAtmSFi3ZTbMRmvxxLTrdVzxrAxxBsRoREntXjc4j3pSGgiqJEnUgPaCR6RvxEtimXYEgsj1",
  "decoyKey6": "3Ca5yChXK92kAr7E26Fsr4QLccdYJsGk5jbtKw5ZH7zEwogZADjnZ2brVgvCVfLQhTqeMHXTRD4Tqgqv4u9WvyKn",
  "decoyKey7": "4ypDUkcGFK8tqQ9DQTNwgaAHuLYS9wg69MzoNstDmwwmWGPj92doPSo4rQfRE5xC1JLfFmDHCYyENd24PTSAvhrn",
  "decoyKey8": "2pPwTcZDYe13QcX6YXCXh8VSKjxfQokZfa1GHz29QkUDbENUHeZanKjRJMPTYe9LuAW3eVJBCZ2KwPBHrH82gU4U",
  "decoyKey9": "iCEw5tsMKvyTpyppa7UuuMhX6EqjuKruQPp1JRfz3YHDz9qeZQFhAgkBXK5bTDoqKEU7c4xDY22RxnXHbrepJSa",
  "decoyKey10": "3kpzD6xejjqnAVjm8qTDaHa94WfWgeRmk2RTkMxcq51Z3DSfjw4U21KNTkNcjUjcnkyVqcC6rRyjbDbnjiUAQ4xE",
  "decoyKey11": "3GMNPhdcLtBaCY4V32dqcojEZKoJpmtnMP1afbKV2ZgU865aea4ZMmG4UyBhkHKpBnsQLPuVKUjjPtCtuDJ2A5wT",
  "decoyKey12": "3YuGvieH3XPjHxqhCgvNDcV7poLMp9Le5cLRo68bh59hHopDHfyMPV4YVahswPMofP8itQvaMTz6kNhS8Z8rhtfT",
  "decoyKey13": "2B4QRsx47HiQANtsqqsP76SgBFQtaK6GyMvsN7XofKfgcU4voP9GxtKEpsSqGBdRXC1RVEAPTUMigscgQzSHXk84",
  "decoyKey14": "3we7v2cdZiZNiyQnUCSEfPQ4ptsvg8oP6yrQyzxpf6W8sXwJ4psWA91NYWmWY8qATxHHAATEisJRwnicxwtPTtJg",
  "decoyKey15": "3n37j2bHPCiazD7Kk9AcAHJfnefArvMgTFAAwQywRC9KTE2kXnpy2SzWc8hwFfgcvzqSoEb5s7uczk8U9aG8eEoZ",
  "decoyKey16": "5fjzCnf2LmWLGFBbsMeSYgHU1zhthxBzsSNGw7h2b7hkK3TUsTEWgFjUq3miYB3Rxf61msnF7a5pDrARf4DBcqyH",
  "decoyKey17": "4tzTHRoXdyUsfMEnV6vuaq96EGXtkoQtFXJRMc5Q5XhjNkWehWA34fBRxhvZCCLHJaicdotLT6nrK9UFJB928VJ5",
  "decoyKey18": "2puaPP89ddZUcvcMLryucaAHTsyQ53pcfPxZEF3WVBkR8F3qmmojSEtPWoeTMvy9nz864UNBDhsPL5Md43FXGytV",
  "decoyKey19": "5sBZn53SDE8chBNUvn9r1Wm7rankUt4mKQ1iwvqfxykFm9Crye8VoE42m2pSaSEvLwWRTRQEbVaePj93uExY11iu",
  "decoyKey20": "2wPAjpwVJ4kofyPCAn9d6TsLindWzkmsQ6XX4rsPebjmhSeg1wpqLQqAVGcdtqBpGja6iNwoxEus3SSADiCXeoBy",
  "decoyKey21": "2vrexyFkMn2Df8z4HZBNZjXB1XnCLkDeTEKA5CE7f18gZfGqR2JPsLyatkM8zj9n4Y2NJoGX5wFaMyVhVopTXzsU",
  "decoyKey22": "2e7SoP8bFMdi4PgbuedJxr8s76mUz9XPi2KH72oCkYJWMndADmepjSt3hisPJexpBzKQ6JvFyxhZm5k3u1bs6FEx",
  "decoyKey23": "5ZjttGDPVmiva9GoDdpUQSE7Fvri2N82yEJh6vbhwT32aJb1YSEhcJWXBjJR4qEh1qp4kGw9Wofro94TduUVtHfo",
  "decoyKey24": "2XL6GV5ztmKSzBkhfQE8fZ2ukrMteaQXDP2ZjP1mbjDad6sTuC7vsGBsMhwKZArvUmUvLicHbQa5GrXCSgWxLYWg",
  "decoyKey25": "2ShAihv9aZhcgv9ikcckyhZzCHkKhgXmxLyvZbzQmJkVZWayVfPZw1KHP9jpoSL6o8acDDT2yyatbii7PTjTyszZ",
  "decoyKey26": "5C3vfNTkfgQzzbySJcif8UsvhsDRVNhKUFZEv7YwpK7MPeHnQf96xjnqECY57DqbvGaEBW7ea2z9TTZVZQGJD7nw",
  "decoyKey27": "2UyZocKhQ7ubhqCh7dmUtNeHXrDbSHupKX9Pn14uJbuemywzQB7uQ7xAQPwPJLYvnivg4sprYJ9EPmTTdcA8sdcw",
  "decoyKey28": "MVTWFrAifuhPueHLZvD6u5LunWjb7BXZ991qA3juYY4cteLsT2jY2ZBLVx8ACVwz3TnsvpYEkuuSRdbBwnNX2AW",
  "decoyKey29": "3oqyWPdqZwsT4MURSpGsvijsMz66Uzo15tEN4LyhM29a7txXkDVQQKdrkQ7VsJvaN2k44oCogmkLttkSxdNPg3o9",
  "decoyKey30": "4EQebb7cSRZ87Z8U1cSzRfTyfNMbTvz7A3Et7oSWZfhuHJfcnWt4GLoNzHZ74WJnh1PGuoYvvGeNk79Qm1vV2W9V",
  "decoyKey31": "5Efdga37hmvBLNzqM8GsnHDds6ogqmsvjnX2hfo3x8S7tzhWQNv9uHFfnSmiFroHBSaX7Eh1KCwmLnDvvsXhztca",
  "decoyKey32": "5sK8aTiVowqzsnbmMuZpT9CvDwAqHDANDUjL8saY3nnn4TyUqboj9KB7wCgoxwGT1RKaycuprs5HeK8YnvntafW",
  "decoyKey33": "4xqjiABeDTGbvUmrG6kWev1K2MsRfQC6whP6JKpFoD6xqsm2JHwaXi1asACJmP4RVUYrKcHtqmcJDxQwcwibFhJc",
  "decoyKey34": "r7xKV3KJ1c2NmieKehjAx5zGGEKVcn1LbiDV6SXT83NvMgNhzDbUyNrFmfKjjE56bHzE2nDPHMaMA99Wpv9UF1g",
  "decoyKey35": "4YVoqxpSPLtVvsJ3qRZxsDtVjpqqGbBf8GH9WCY2SBA5PLVWuh8oQVuXcJnT5a1j41kkrTLHZppJ1X15gwuq5KDq",
  "decoyKey36": "36WrmS9qsWfzvBXeYNSe7rqp2NfuaAQdsHVcsT4LxKGGLy7NdNpw3E86szUCuAoke9EyBer5dL3AZUw9XZbsGpd7",
  "decoyKey37": "4UQwrV5eEkc7DdGwbPsVD5xFZLiubFGEBbw9bWbimpEBzD5ac6obr37ej31TVXGyGshU9dukvZEtzxsHG1mp8Fkf",
  "decoyKey38": "3A97g2TPJe8R5b19QPqsE331n1tCABriCiYkCMDZ2ZqjCpeGXXrsxgxBQprzcM6NgTaYk3AsKmT7KgZHcKruYbEZ",
  "decoyKey39": "5bDptNBL46yioWMgz4iBfiVyoULu2v8BPUvE6pG2pQ2iY8x4CXnutHbKamhqgJJGmqufJiENuwn45CXK5X6EhqBZ"
};
// DECOY_KEYS_END
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